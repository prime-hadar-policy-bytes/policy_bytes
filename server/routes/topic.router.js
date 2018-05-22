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
    
    //all of the topics are store in result.rows; therefore we will send back
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

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;