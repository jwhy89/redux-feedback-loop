const express = require('express');
const submissionRouter = express.Router();
const pool = require('../modules/pool');

// POST
// Add a feedback submission to the database
// Expects a submission object on the request body with
// properties for "feeling", "understanding", "support", "comments"
submissionRouter.post('/', (req, res) => {
    let submission = req.body;
    console.log('Adding submission', submission);

    let sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") 
    VALUES ($1, $2, $3, $4);`;
    pool.query(sqlText, [submission.feeling, submission.understanding, submission.support, submission.comments,])
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('Failed to insert new submission', submission);
            console.log(error);
            res.sendStatus(500);
        })
})

// GET all submitted feedback that have been placed
submissionRouter.get('/admin', (req, res) => {
    // Find all feedback and return them
    pool.query('SELECT * FROM "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /admin', error);
        res.sendStatus(500);
    });
})

// DELETE
submissionRouter.delete('/:id', (req, res) => {
    let id = req.params.id;
    console.log(`Deleting feedback with id=${id}`);
    let sqlText = `DELETE FROM "feedback" WHERE "id"=$1`;
    pool.query(sqlText, [id])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Failed to delete feedback with id=${id}`, error);
            res.sendStatus(500);
        })
})

module.exports = submissionRouter;