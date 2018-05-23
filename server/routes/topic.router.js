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

//gets the featured topic from database
//for explanation of any variables or methods in the following get request, see
//router.get('/alltopics') as the same variables and methods are used there
router.get('/featuredtopic', (req, res) => {

    // if(req.isAuthenticated()){

    const queryText = `;`

    pool.query(queryText).then((result) => {
        res.send(result.rows)

    }).catch((error) => {
        console.log('Error in getting loves: ', error);
        
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
router.post('/newtopic', (req, res) => {

    if(req.isAuthenticated){
         //game is the newInput object from state in GameInfo.js
         const topic = req.body;

         (async () => {
             //client does not allow the program to proceed until it is connected to the database
             const client = await pool.connect();
 
             try{
                 await client.query('BEGIN');
 
                 //creates an entry in the topic table in the database
                 let queryText = `INSERT INTO "topic" ("topic_title", "premise", "common_ground", "archive_summary") 
                 VALUES($1, $2, $3, $4)  RETURNING "id";`;
                 const topicResult = await client.query(queryText, [topic.topicTitle, topic.topicPremise, topic.topicCommonGround, topic.topicSummary]);
 
                 //the id of the topic that was created in topicResult
                 const topicId = topicResult.rows[0].id
 
                 //text for posting gameinfo to the database
                 queryText = `INSERT INTO "" ("user_id", "game_id", "player_name",
                 "faction1", "faction2", "points", "rank", "bases", "comments", "admin") 
                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`;
 
                 //takes user id, game id, and the property values from the variable game
                 //and inputs them into the VALUES ($1, $2, $3,...) of the queryText
                 //client.query then posts the info to the database
                 const result = await client.query(queryText, [req.user.id, gameId, game.playerName,
                 game.factionArray[0], game.factionArray[1], game.points, game.rank, game.bases,
                 game.comments, req.user.id])
                 await client.query('COMMIT');
                 res.sendStatus(201);
 
             } catch (e) {
 
                 //checks for errors at any point within the try block; if errors are found,
                 //all the data is cleared to prevent data corruption
                 console.log('ROLLBACK', e);
                 await client.query('ROLLBACK');
                 throw e;
             } finally {
 
                 //allows res.sendStatus(201) to be sent
                 client.release();
             }
 
             //if an error occurs in posting the game info to the database, the error will
             //appear in the console log
         })().catch((error) => {
             console.log('CATCH', error);
             res.sendStatus(500);
         })
    }

});



//WRITTEN BY ATTICUS
//TOGGLES PUBLISHED STATUS IN TOPIC TABLE
router.put('/togglePublished', (req, res) => {
    console.log('in /api/topics/togglePublished', req.body);

    //topicId contains the id of the topic whose status of published or not published
    //we want to change
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

    //topicId contains the id of the topic whose status of featured
    //we want to change
    let topicId = req.body.id; 

    //since we can only have one topic be the featured topic, we will start off
    //by setting the featured status of every topic to false via firstQueryText;
    //then we will change the status of the topic we want to be the featured topic
    //to true via the secondQueryText
    let firstQueryText = `UPDATE topic SET featured = FALSE;`
    let secondQueryText = `UPDATE topic SET featured = TRUE WHERE id = $1;`

    pool.query(firstQueryText)
    .then((result)=> {

        //topicId tells the topic table which topic we want to change to the featured topic
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