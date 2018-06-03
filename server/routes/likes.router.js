
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


//gets all comments from database

router.get('/get/proposal/:id', (req, res) => {

    let id = req.params.id;

    if (req.isAuthenticated) {

    const queryText = `SELECT * FROM "like" WHERE proposal_id = $1;`
    //pool.query is the method that sends the queryText to the database and 
    //stores the results in the variable result
    pool.query(queryText, [id]).then((result) => {
        //all of the comments are stored in result.rows; therefore we will send back
        //result.rows
        res.send(result.rows)
        //if there was an error in getting the comments from the database,
        //the error will be displayed in the console log
    }).catch((error) => {
        console.log('Error in getting comments_general: ', error);

    })
}

});

router.put('/increment/:id', (req, res) => {
    //in order to post an item, user must be signed in
    console.log(req.body);

    pool.query('SELECT $1 FROM "like" WHERE $2 = $3', [req.body.columnName, req.body.columnName, req.body.columnId]).then((result) => {

        const likeResult = result && result.rows && result.rows[0];

        if (!likeResult) {

            //INSERT NEW LIKE ROW
            let queryText = `INSERT INTO "like" ("$1", "count", "topic_id") VALUES ($2, $3, $4);`;
            pool.query(queryText, [req.body.columName, 1, req.body.columnId]).then((result) => {
                res.sendStatus(201);
            }).catch((err) => {
                console.log(err);
                res.sendStatus(500)
            })
        } else {
            //ADD TO EXISTING LIKE ROW
            let queryText = `UPDATE "like" SET "$1" = $2 WHERE "$3" = $4;`;
            pool.query(queryText, [req.body.columName, likeResult.count + 1, req.body.columName, req.body.columnId]).then((result) => {
                res.sendStatus(201);
            }).catch((err) => {
                console.log(err);
                res.sendStatus(500)
            })
        }
        res.sendStatus(201);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500)
    })

});



module.exports = router;
