const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


//gets all comments from database

router.get('/getGeneralcomments', (req, res) => {

    const queryText = `SELECT comments_general.id, comments_general.date, comments_general.order, comments_general.person_id, comments_general.topic_id, comments_general.comment, comments_general.approved, person.fb_display_name, person.fb_picture, person.id as person_id FROM "comments_general" LEFT JOIN "person" ON comments_general.person_id = person.id ORDER BY comments_general.order;`
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

});

router.post('/addComment', (req, res) => {
    console.log('in api/comments/addComment');
    
    if (req.isAuthenticated()) {//in order to post an item, user must be signed in
    let queryText = `INSERT INTO comments_general ("person_id", "topic_id", "comment", "approved", "order") VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [req.body.personId, req.body.topicId, req.body.comment, req.body.approved, req.body.order]).then((result) => {
        res.sendStatus(201);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500)
    })
    } else {
        res.sendStatus(403);
    }
});


router.delete('/deleteComment/:id', (req, res) => {
    //TO-DO add isAuthenticated AND status === 2 for Admin access
    if (req.isAuthenticated && req.user.status === 2) {
        let commentId = req.params.id;
        console.log('in /api/comments/deleteComment', commentId);
        let queryText = `DELETE from comments_general WHERE id = $1;`
        pool.query(queryText, [commentId])
            .then((result) => {
                console.log('successful DELETE /api/comments/deleteComment');
                res.sendStatus(200);
            })
            .catch((err) => {
                console.log('error in DELETE /api/comments/deleteComment');
                res.sendStatus(500);
            })
    }
})


module.exports = router;

