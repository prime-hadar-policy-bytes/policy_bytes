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
    const queryText = `SELECT * from topic ORDER BY id asc;`

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
                 let queryText1 = `INSERT INTO "contributor" ("first_name", "last_name", "bio", "photo_url")
                 VALUES($1, $2, $3, $4) RETURNING "id";`;
                 const contributor1Result = await client.query(queryText1, [topic.contributor1FirstName, 
                    topic.contributor1LastName, topic.contributor1Bio, topic.contributor1Photo]);
                
                const contributor1Id = contributor1Result.rows[0].id

                let queryText2 = `INSERT INTO "contributor" ("first_name", "last_name", "bio", "photo_url")
                 VALUES($1, $2, $3, $4) RETURNING "id";`;
                 const contributor2Result = await client.query(queryText2, [topic.contributor2FirstName, 
                    topic.contributor2LastName, topic.contributor2Bio, topic.contributor2Photo]);
                
                const contributor2Id = contributor2Result.rows[0].id

                let queryText3 = `INSERT INTO "proposal" ("topic_id", "contributor_id", "proposal") VALUES($1,
                    $2, $3);`
                    
                 await client.query(queryText3, [topicId, contributor1Id, topic.proposal1])

                 let queryText4 = `INSERT INTO "proposal" ("topic_id", "contributor_id", "proposal") VALUES($1,
                    $2, $3);`
                    
                 await client.query(queryText4, [topicId, contributor2Id, topic.proposal2])

                //key is each property in keyClaims e.g. 0:{topicId: 1, ...}, 1:{topicId: 2, ...}, ...
                 for(key in topic.keyClaims){
                    let claim_order = key;
                     //keyData is the value of a property in the keyClaims object
                    let keyData = topic.keyClaim[key]
                    let keyClaimData = [];
                    
                     for(prop in keyData){

                        let keyDataProp = keyData[prop]
                        keyClaimData.push(keyDataProp);
                        //end for loop of for(prop in keyData)

                        let queryText5 = `INSERT INTO "key_claim" ("topic_id", "contributor_id", "claim", "claim_order")
                 VALUES($1, $2, $3, $4) RETURNING "id";`;
                        let contributor;
                        if(keyClaimData[1] === 'contributor1'){
                            contributor = contributor1Id
                        }else{
                            contributor = contributor2Id
                        }
                        const keyClaimResult = await client.query(queryText5, [topicId, contributor, keyClaimData[2], claim_order])

                        const keyClaimId = keyClaimResult.rows[0].id

                        let streamData = keyClaimData[3]
                        let streamClaimData = [];

                        for(stream in streamData){
                            let streamDataProp = streamData[stream]
                            streamClaimData.push(streamDataProp)
                        }
                        let queryText6 = `INSERT INTO "stream" ("key_claim_id", "contributor_id", "text", "evidence")
                        VALUES ($1, $2, $3, $4)`
                        if(streamClaimData[0] === 'contributor1'){
                            contributor = contributor1Id;
                        }else{
                            contributor = contributor2Id
                        }

                        await client.query(queryText6, [keyClaimId, contributor, streamClaimData[1], streamClaimData[2]])

                     }
                 }

                 const contributor2Result = await client.query(queryText2, [topic.keyClaims, 
                    topic.contributor2LastName, topic.contributor2Bio, topic.contributor2Photo]);
                
                const contributor2Id = contributor2Result.rows[0].id

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

//WRITTEN BY ATTICUS
//DELETES SELECTED TOPIC
router.delete('/deleteTopic/:id', (req, res) => {
    let topicId = req.params.id; 
    console.log('in /api/topics/deleteTopic', topicId);
    let queryText = `DELETE from topic WHERE id = $1;`
    pool.query(queryText, [topicId])
    .then((result)=> {
        console.log('successful DELETE /api/topic/deleteTopic');
        res.sendStatus(200);
    })
    .catch((err)=> {
        console.log('error in DELETE /api/topic/deleteTopic');
        res.sendStatus(500); 
    })
})




module.exports = router;