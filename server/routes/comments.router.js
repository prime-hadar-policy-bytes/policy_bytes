const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


//gets all contributors from database

router.get('/getGeneralcomments', (req, res) => {

    // if(req.isAuthenticated()){
//TO-DO write a GET that grabs user's picture URL
    const queryText = `SELECT * FROM "comments_general";`
    //pool.query is the method that sends the queryText to the database and 
    //stores the results in the variable result
    pool.query(queryText).then((result) => {
    //all of the comments are stored in result.rows; therefore we will send back
    //result.rows
        res.send(result.rows)
    //if there was an error in getting the comments from the database,
    //the error will be displayed in the console log
    }).catch((error) => {
        console.log('Error in getting comments_general: ', error);
        
    })
    // } else{

    //     //if req.isAuthenticated() is false, the forbidden error will appear
    //     //on the webpage
    //     res.sendStatus(403)
    // }
});

router.post('/addComment', (req, res) => {
    console.log('in api/comments/addComment');
    // console.log(req.body);
    // console.log('is authenticated?', req.isAuthenticated());
    // console.log('user', req.user);
    // if (req.isAuthenticated()) {//in order to post an item, user must be signed in
        let queryText = `INSERT INTO comments_general ("person_id", "topic_id", "comment", "approved") VALUES ($1, $2, $3, $4);`;
        pool.query(queryText, [req.body.personId, req.body.topicId, req.body.comment, req.body.approved]).then((result) => { res.sendStatus(201);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500)
        })
    // } else {
    //     res.sendStatus(403);
    // }
});


router.delete('/deleteComment/:id', (req, res) => {
    //TO-DO add isAuthenticated AND status === 2 for Admin access
    let commentId = req.params.id; 
    console.log('in /api/comments/deleteComment', commentId);
    let queryText = `DELETE from topic WHERE id = $1;`
    pool.query(queryText, [commentId])
    .then((result)=> {
        console.log('successful DELETE /api/comments/deleteComment');
        res.sendStatus(200);
    })
    .catch((err)=> {
        console.log('error in DELETE /api/comments/deleteComment');
        res.sendStatus(500); 
    })
})


module.exports = router;

