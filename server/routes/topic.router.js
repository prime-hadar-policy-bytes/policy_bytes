const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//gets all topics from database
router.get('/alltopics', (req, res) => {

    //checks to see if the user has an account in the database;
    //if they don't, a forbidden message is displayed and he or she
    //will not have access to the results from the following query

    // if(req.isAuthenticated()){

    //queryText is the query text that will get all of the topics from the 
    //topic table in the database
    const queryText = `SELECT * FROM "topic";`

    //pool.query is the method that sends the queryText to the database and 
    //stores the results in the variable result
    pool.query(queryText).then((result) => {
    
    //all of the topics are stored in result.rows; therefore we will send back
    //result.rows
        res.send(result.rows)

    //if there was an error in getting the topics from the database,
    //the error will be displayed in the console log
    }).catch((error) => {
        console.log('Error in getting topics: ', error);
        
    })
    // } else{

    //     //if req.isAuthenticated() is false, the forbidden error will appear
    //     //on the webpage
    //     res.sendStatus(403)
    // }
});

//gets all key claims from database
router.get('/allkeyclaims', (req, res) => {

    //see comment from router.get('/alltopics') for explanation of 
    //if(req.isAuthenticated())
    // if(req.isAuthenticated()){

    //queryText is the query text that will get all of the key claims from 
    //the key_claim table in the database
    const queryText = `;`

    //pool.query is the method that sends the queryText to the database and 
    //stores the results in the variable result
    pool.query(queryText).then((result) => {
    
    //all of the key claims are stored in result.rows; therefore we will send back
    //result.rows
        res.send(result.rows)

    //if there was an error in getting the key claims from the database,
    //the error will be displayed in the console log
    }).catch((error) => {
        console.log('Error in getting key claims: ', error);
        
    })
    // } else{

    //     //if req.isAuthenticated() is false, the forbidden error will appear
    //     //on the webpage
    //     res.sendStatus(403)
    // }
});

//gets all streams from database
router.get('/allstreams', (req, res) => {

    //see comment from router.get('/alltopics') for explanation of 
    //if(req.isAuthenticated())
    // if(req.isAuthenticated()){

    //queryText is the query text that will get all of the streams from 
    //the stream table in the database
    const queryText = `;`

    //pool.query is the method that sends the queryText to the database and 
    //stores the results in the variable result
    pool.query(queryText).then((result) => {
    
    //all of the streams are stored in result.rows; therefore we will send back
    //result.rows
        res.send(result.rows)

    //if there was an error in getting the streams from the database,
    //the error will be displayed in the console log
    }).catch((error) => {
        console.log('Error in getting streams: ', error);
        
    })
    // } else{

    //     //if req.isAuthenticated() is false, the forbidden error will appear
    //     //on the webpage
    //     res.sendStatus(403)
    // }
});

//gets all contributors from database
router.get('/allcontributors', (req, res) => {

    //see comment from router.get('/alltopics') for explanation of 
    //if(req.isAuthenticated())
    // if(req.isAuthenticated()){

    //queryText is the query text that will get all of the contributors from 
    //the contributor table in the database
    const queryText = `SELECT * FROM "contributor";`

    //pool.query is the method that sends the queryText to the database and 
    //stores the results in the variable result
    pool.query(queryText).then((result) => {
    
    //all of the contributors are stored in result.rows; therefore we will send back
    //result.rows
        res.send(result.rows)

    //if there was an error in getting the topics from the database,
    //the error will be displayed in the console log
    }).catch((error) => {
        console.log('Error in getting contributors: ', error);
        
    })
    // } else{

    //     //if req.isAuthenticated() is false, the forbidden error will appear
    //     //on the webpage
    //     res.sendStatus(403)
    // }
});



/**
 * POST route template
 */
router.post('/', (req, res) => {

});



//WRITTEN BY ATTICUS
//TOGGLES PUBLISHED STATUS IN TOPIC TABLE
router.put('/togglePublished', (req, res) => {
    console.log('in /api/topics/togglePublished', req.body);
    let topicId = req.body.id; 
    let queryText = `UPDATE topic SET published = NOT published WHERE id = $1;`
    pool.query(queryText, [topicId])
    .then((result)=> {
        console.log('successful PUT /api/topic/togglePublished');
        res.sendStatus(200);
    })
    .catch((err)=> {
        console.log('error in PUT /api/topic/togglePublished');
        res.sendStatus(500); 
    })
})

//WRITTEN BY ATTICUS
//TOGGLES FEATURED STATUS IN TOPIC TABLE (SETS ALL TO UNFEATURED, SETS SELECTED TO FEATURED)
router.put('/toggleFeatured', (req, res) => {
    console.log('in /api/topics/toggleFeatured', req.body);
    let topicId = req.body.id; 
    let firstQueryText = `UPDATE topic SET featured = FALSE;`
    let secondQueryText = `UPDATE topic SET featured = TRUE WHERE id = $1;`
    pool.query(firstQueryText)
    .then((result)=> {
        pool.query(secondQueryText, [topicId])
        .then((result) => {
            console.log('successful PUT /api/topic/toggleFeatured');
            res.sendStatus(200); 
        })
        .catch((err)=> {
            console.log('error in PUT /api/topic/toggleFeatured');
            res.sendStatus(500); 
        })
    })
    .catch((err)=> {
        console.log('error in PUT /api/topic/toggleFeatured');
        res.sendStatus(500); 
    })
})




module.exports = router;