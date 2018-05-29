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
    console.log('Inside postroute');
    

    // if(req.isAuthenticated){
    //game is the newInput object from state in GameInfo.js
    const topic = req.body;
    console.log('topic: ', topic);


    (async () => {
        //client does not allow the program to proceed until it is connected to the database
        const client = await pool.connect();

        try {
            await client.query('BEGIN');

            //text for posting contributor info to the database
            let queryText1 = `INSERT INTO "contributor" ("first_name", "last_name", "bio", "photo_url")
                 VALUES($1, $2, $3, $4) RETURNING "id";`;
            console.log('topic.contributor1FirstName: ', topic.contributor1FirstName);

            const contributor1Result = await client.query(queryText1, [topic.contributor1FirstName,
            topic.contributor1LastName, topic.bio1, topic.photo1]);
            console.log('successfully posted contributor1');

            const contributor1Id = contributor1Result.rows[0].id

            let queryText2 = `INSERT INTO "contributor" ("first_name", "last_name", "bio", "photo_url")
                 VALUES($1, $2, $3, $4) RETURNING "id";`;
            const contributor2Result = await client.query(queryText2, [topic.contributor2FirstName,
            topic.contributor2LastName, topic.bio2, topic.photo2]);
            console.log('successfully posted contributor12');

            const contributor2Id = contributor2Result.rows[0].id

            //creates an entry in the topic table in the database
            let queryText = `INSERT INTO "topic" ("topic_title", "premise", "common_ground", "contributor1_id",
                 "contributor2_id", "archive_summary") VALUES($1, $2, $3, $4, $5, $6)  RETURNING "id";`;
            const topicResult = await client.query(queryText, [topic.topicTitle, topic.topicPremise, topic.topicCommonGround,
                contributor1Id, contributor2Id, topic.topicSummary]);
            console.log('successfully posted topic');

            //the id of the topic that was created in topicResult
            const topicId = topicResult.rows[0].id

            let queryText3 = `INSERT INTO "proposal" ("topic_id", "contributor_id", "proposal") VALUES($1,
                    $2, $3);`

            await client.query(queryText3, [topicId, contributor1Id, topic.proposal1])
            console.log("successfully posted contributor1's proposal");

            let queryText4 = `INSERT INTO "proposal" ("topic_id", "contributor_id", "proposal") VALUES($1,
                    $2, $3);`

            await client.query(queryText4, [topicId, contributor2Id, topic.proposal2])
            console.log("successfully posted contributor2's proposal");

            //key is each property in keyClaims e.g. 0:{topicId: 1, ...}, 1:{topicId: 2, ...}, ...
            for (key in topic.keyClaims) {
                console.log('key: ', key);
                console.log('topic.keyClaims: ', topic.keyClaims);

                let claim_order = key;
                //keyData is the value of a property in the keyClaims object e.g. 
                //{claimDbId: '0', claimContributor: 'contributor1', keyClaim: 'text', streamData: {}}
                let keyData = topic.keyClaims[key]
                console.log('keyData: ', keyData);

                let keyClaimData = [];

                for (prop in keyData) {
                    //keyDataProp is the value of a property in the keyData object e.g.
                    //'0', 'contributor1', 'text' 
                    let keyDataProp = keyData[prop]
                    keyClaimData.push(keyDataProp);
                }
                //end for loop of for(prop in keyData)

                let queryText5 = `INSERT INTO "key_claim" ("topic_id", "contributor_id", "claim", "claim_order")
                    VALUES($1, $2, $3, $4) RETURNING "id";`;
                let contributor;
                if (keyClaimData[1] === 'contributor1') {
                    contributor = contributor1Id
                } else {
                    contributor = contributor2Id
                }
                const keyClaimResult = await client.query(queryText5, [topicId, contributor, keyClaimData[2], claim_order])
                console.log("successfully posted key claim");

                const keyClaimId = keyClaimResult.rows[0].id

                let streamData = keyClaimData[3]

                for (stream in streamData) {

                    let streamClaimData = [];

                    //stream is the 0 property, 1 property, etc. in the streamData object
                    let stream_order = stream;

                    //streamDataObj is the value of a property in the streamData object; this
                    //value is an object e.g. {streamDbId: '0', streamContributor: 'contributor2', 
                    //streamComment: 'text', streamEvidence: 'more text',}
                    let streamDataObj = streamData[stream]
                    for (prop in streamDataObj) {
                        //prop is each property in the streamDataObj, but I want the values...

                        //streamDataProp is the value of a property in the streamDataObj object e.g.
                        //'0', 'contributor2', 'text', 'more text'
                        let streamDataProp = streamDataObj[prop]
                        streamClaimData.push(streamDataProp)
                    }
                    console.log('streamClaimData: ', streamClaimData);

                    let queryText6 = `INSERT INTO "stream" ("key_claim_id", "contributor_id", "stream_comment", 
                    "stream_evidence", "stream_order")
                    VALUES ($1, $2, $3, $4, $5)`
                    if (streamClaimData[1] === 'contributor1') {
                        contributor = contributor1Id;
                    } else {
                        contributor = contributor2Id
                    }

                    await client.query(queryText6, [keyClaimId, contributor, streamClaimData[2], streamClaimData[3], stream_order])
                    console.log("successfully posted stream claim");
                }
            }

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
    // }

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
        .then((result) => {
            console.log('successful PUT /api/topic/togglePublished');
            res.sendStatus(200);
        })

        .catch((err) => {
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
        .then((result) => {

            //topicId tells the topic table which topic we want to change to the featured topic
            pool.query(secondQueryText, [topicId])
                .then((result) => {
                    console.log('successful PUT /api/topic/toggleFeatured');
                    res.sendStatus(200);
                })

                .catch((err) => {
                    console.log('error in PUT /api/topic/toggleFeatured');
                    res.sendStatus(500);
                })
        })

        .catch((err) => {
            console.log('error in PUT /api/topic/toggleFeatured');
            res.sendStatus(500);
        })
})

//WRITTEN BY ATTICUS
//DELETES SELECTED TOPIC
router.delete('/deleteTopic/:id', (req, res) => {
    let topicId = req.params.id;
    
    //queryText deletes the topic with the same topic id as topicId;
    //this will delete everything associated with that topic except for 
    //the contributors
    let queryText = `DELETE FROM "topic" WHERE id = $1;`
    pool.query(queryText, [topicId])
        .then((result) => {
            console.log('successful DELETE /api/topic/deleteTopic');
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('error in DELETE /api/topic/deleteTopic');
            res.sendStatus(500);
        })
})

//updates topic in database
router.put('/updatetopic', (req, res) => {
    console.log('inside putroute');
    
    let topic = req.body;
    console.log('topic: ', topic);
    

    // if(req.isAuthenticated){

    (async () => {
        //client does not allow the program to proceed until it is connected to the database
        const client = await pool.connect();

        try {
            await client.query('BEGIN');

            //text for posting contributor info to the database
            let queryText1 = `UPDATE "contributor" SET "first_name" = $1, "last_name" = $2, "bio" = $3, "photo_url" = $4
            WHERE "id" = $5;`;

            await client.query(queryText1, [topic.contributor1FirstName,
                topic.contributor1LastName, topic.bio1, topic.photo1, topic.contributor1DbId]);
            console.log('successfully posted contributor1');

            let queryText2 = `UPDATE "contributor" SET "first_name" = $1, "last_name" = $2, "bio" = $3, "photo_url" = $4
            WHERE "id" = $5;`;
            console.log('first name: ', topic.contributor2FirstName);
            console.log('contributor2 id: ', topic.contributor2DbId);
            
            await client.query(queryText2, [topic.contributor2FirstName,
                topic.contributor2LastName, topic.bio2, topic.photo2, topic.contributor2DbId]);
            console.log('successfully posted contributor2');

            //creates an entry in the topic table in the database
            let queryText = `UPDATE "topic" SET "topic_title" = $1, "premise" = $2, "common_ground" = $3, 
            "archive_summary" = $4 WHERE "id" = $5;`;
            await client.query(queryText, [topic.topicTitle, topic.topicPremise, topic.topicCommonGround, 
                topic.topicSummary, topic.topicDBId]);
            console.log('successfully posted topic');

            let queryText3 = `UPDATE "proposal" SET "proposal" = $1 WHERE "id" = $2;`
            await client.query(queryText3, [topic.proposal1, topic.contributor1DbId])
            console.log("successfully posted contributor1's proposal");

            let queryText4 = `UPDATE "proposal" SET "proposal" = $1 WHERE "id" = $2;`

            await client.query(queryText4, [topic.proposal2, topic.contributor2DbId])
            console.log("successfully posted contributor2's proposal");

            //key is each property in keyClaims e.g. 0:{topicId: 1, ...}, 1:{topicId: 2, ...}, ...
            for (key in topic.keyClaims) {
                console.log('key: ', key);
                console.log('topic.keyClaims: ', topic.keyClaims);

                let claim_order = key;
                //keyData is the value of a property in the keyClaims object e.g. 
                //{claimDbId: '0', claimContributor: 'contributor1', keyClaim: 'text', streamData: {}}
                let keyData = topic.keyClaims[key]
                console.log('keyData: ', keyData);

                let keyClaimData = [];

                for (prop in keyData) {
                    //keyDataProp is the value of a property in the keyData object e.g.
                    //'0', 'contributor1', 'text' 
                    let keyDataProp = keyData[prop]
                    keyClaimData.push(keyDataProp);
                }
                //end for loop of for(prop in keyData)

                let queryText5 = `UPDATE "key_claim" SET "contributor_id" = $1, "claim" = $2 WHERE "id" = $3;`;
                let contributor;
                if (keyClaimData[1] === topic.contributor1FirstName) {
                    contributor = topic.contributor1DbId
                } else {
                    contributor = topic.contributor2DbId
                }
                const keyClaimResult = await client.query(queryText5, [contributor, keyClaimData[2], keyClaimData[0]])
                console.log("successfully posted key claim");

                let streamData = keyClaimData[3]

                for (stream in streamData) {

                    let streamClaimData = [];

                    //stream is the 0 property, 1 property, etc. in the streamData object
                    let stream_order = stream;

                    //streamDataObj is the value of a property in the streamData object; this
                    //value is an object e.g. {streamDbId: '0', streamContributor: 'contributor2', 
                    //streamComment: 'text', streamEvidence: 'more text',}
                    let streamDataObj = streamData[stream]
                    for (prop in streamDataObj) {
                        //prop is each property in the streamDataObj, but I want the values...

                        //streamDataProp is the value of a property in the streamDataObj object e.g.
                        //'0', 'contributor2', 'text', 'more text'
                        let streamDataProp = streamDataObj[prop]
                        streamClaimData.push(streamDataProp)
                    }
                    console.log('streamClaimData: ', streamClaimData);

                    let queryText6 = `UPDATE "stream" SET "contributor_id" = $1, "stream_comment" = $2, 
                    "stream_evidence" = $3 WHERE "id" = $4;`
                    if (streamClaimData[1] === topic.contributor1FirstName) {
                        contributor = topic.contributor1DbId
                    } else {
                        contributor = topic.contributor2DbId
                    }

                    await client.query(queryText6, [contributor, streamClaimData[2], streamClaimData[3], streamClaimData[0]])
                    console.log("successfully posted stream claim");
                }
            }

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
    // }
})


//FETCHES SELCTED TOPICS INFO TO POPULATE TOPICEDIT PAGE (BASED ON URL)
router.get(`/fetchEditTopicInfo/:id`, (req, res) => {
    let topicId = req.params.id;
    //selectedTopicToSend is the master object exported at the end of the async function.
    let selectedTopicToSend = {};
    //preserves contributor ids globally.
    let contributor1Id = '';
    let contributor2Id = '';

    (async () => {
        //client does not allow the program to proceed until it is connected to the database
        const client = await pool.connect();

        try {
            await client.query('BEGIN');

            //begins series of async database SELECTS to add to selectedTopicToSend
            let queryText1 = `SELECT topic.topic_title, topic.archive_summary, topic.premise, topic.common_ground, contributor1_id, contributor2_id,
            "topic"."id" as "topic_id" FROM topic 
            WHERE topic.id = $1;`;
            const topicResult = await client.query(queryText1, [topicId]);
            selectedTopicToSend = {
                topidDbId: topicResult.rows[0].topic_id,
                topicTitle: topicResult.rows[0].topic_title,
                topicSummary: topicResult.rows[0].archive_summary,
                topicPremise: topicResult.rows[0].premise,
                topicReadMore: '',
                topicCommonGround: topicResult.rows[0].common_ground
            };
            contributor1Id = topicResult.rows[0].contributor1_id;
            contributor2Id = topicResult.rows[0].contributor2_id;

            let queryText2 = `SELECT id, first_name, last_name, bio, photo_url from contributor where id = $1 OR id = $2;`;
            const contributorResult = await client.query(queryText2, [contributor1Id, contributor2Id]);

            selectedTopicToSend = {
                ...selectedTopicToSend, contributor1DbId: contributorResult.rows[0].id,
                contributor1FirstName: contributorResult.rows[0].first_name,
                contributor1LastName: contributorResult.rows[0].last_name,
                bio1: contributorResult.rows[0].bio,
                photo1: contributorResult.rows[0].photo_url,
                contributor2DbId: contributorResult.rows[1].id,
                contributor2FirstName: contributorResult.rows[1].first_name,
                contributor2LastName: contributorResult.rows[1].last_name,
                bio2: contributorResult.rows[1].bio,
                photo2: contributorResult.rows[1].photo_url,
                keyClaims: ''
            };

            let queryText3 = `SELECT proposal, id from proposal WHERE id = $1;`;
            const proposal1Result = await client.query(queryText3, [contributor1Id]);

            selectedTopicToSend = {
                ...selectedTopicToSend, proposal1: proposal1Result.rows[0].proposal,
                proposal1DbId: proposal1Result.rows[0].id
            }

            let queryText4 = `SELECT proposal, id from proposal WHERE id = $1;`;
            const proposal2Result = await client.query(queryText4, [contributor2Id]);

            selectedTopicToSend = {
                ...selectedTopicToSend, proposal2: proposal2Result.rows[0].proposal,
                proposal2DbId: proposal2Result.rows[0].id
            }

            let queryText5 = `SELECT * from key_claim WHERE topic_id = $1 ORDER BY claim_order;`;
            const keyClaimResult = await client.query(queryText5, [topicId]);

            //instantiate empty object to hold all key claims, to be added to selectedTopicToSend 
            allKeyClaimsObject = {};

            for (let keyClaim of keyClaimResult.rows) {
                let queryText6 = `SELECT * from stream WHERE key_claim_id = $1 ORDER BY stream_order;`;
                let streamResult = await client.query(queryText6, [keyClaim.id]);

                //iterates over all streams from dB and packages them as a single object.
                let streamToSpread = {};

                for (let stream of streamResult.rows) {
                    if (stream.contributor_id === contributor1Id) {
                        streamToSpread = {
                            ...streamToSpread, [stream.stream_order]: {
                                streamDbId: stream.id,
                                streamContributor: 'contributor1',
                                streamComment: stream.stream_comment,
                                streamEvidence: stream.stream_evidence
                            }
                        }
                    } else {
                        streamToSpread = {
                            ...streamToSpread, [stream.stream_order]: {
                                streamDbId: stream.id,
                                streamContributor: 'contributor2',
                                streamComment: stream.stream_comment,
                                streamEvidence: stream.stream_evidence
                            }
                        }
                    }
                }

                //adds objects to allKeyClaimsObject
                if (keyClaim.contributor_id === contributor1Id) {
                    allKeyClaimsObject[keyClaim.claim_order] = {
                        claimDbId: keyClaim.id,
                        claimContributor: 'contributor1',
                        keyClaim: keyClaim.claim,
                    }
                } else {
                    allKeyClaimsObject[keyClaim.claim_order] = {
                        claimDbId: keyClaim.id,
                        claimContributor: 'contributor2',
                        keyClaim: keyClaim.claim,

                    }
                }
                //attaches streamData to end of each keyClaim object
                allKeyClaimsObject[keyClaim.claim_order].streamData = streamToSpread;
            }
 
            selectedTopicToSend.keyClaims = allKeyClaimsObject;

            await client.query('COMMIT');
            res.send(selectedTopicToSend);

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

    console.log('in /api/topics/editTopicInfo, ID:', topicId);
})





module.exports = router;