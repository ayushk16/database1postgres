/* eslint-disable no-undef */
const pool = require('../db.js');
const queries = require('./queries.js');


const getData = (req, res) => {
    pool.query(queries.getPosts, (err, result) => {
        if (err) {
            throw err;
        }
        else {
            res.status(200).json(result.rows)
        }
    })
}

const getPostById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getPostById, [id], (err, result) => {
        if (err) {
            throw err;
        }
        else {
            res.status(200).json(result.rows);
        }
    })
}

const getPercentageOfAnsweredPosts = (req, res) => {
    pool.query(queries.percentageOfAnsweredPosts, (err, result) => {
        if (err) {
            throw err;
        }
        else {
            res.status(200).json(result.rows);
        }
    })
}

const getTopReputationUser = (req, res) => {
    pool.query(queries.topReputationUser, (err, result) => {
        if (err) {
            throw err;
        }
        else {
            res.status(200).json(result.rows);
        }
    })
}

const getMostQuestionAnswered = (req, res) => {
    pool.query(queries.mostQuestionAnswered, (err, result) => {
        if (err) {
            throw err;
        }
        else {
            res.status(200).json(result.rows);
        }
    })
}

const getTopUpvotedPosts = (req, res) => {
    pool.query(queries.topUpvotedPosts, (err, result) => {
        if (err) {
            throw err;
        }
        else {
            res.status(200).json(result.rows);
        }
    })
}

const getTagsAssosiatedWithMostPost = (req, res) => {
    pool.query(queries.tagsAssosiatedWithMostPost, (err, result) => {
        if (err) {
            throw err;
        }
        else {
            res.status(200).json(result.rows);
        }
    })
}

const getQuestionsAskedEveryYear = (req, res) => {
    pool.query(queries.questionsAskedEveryYear, (err, result) => {
        if (err) {
            throw err;
        }
        else {
            res.status(200).json(result.rows);
        }
    })
}

const getScores = (req, res) => {
    pool.query(queries.scores, (err, result) => {
        if (err) {
            throw err;
        }
        else {
            res.status(200).json(result.rows);
        }
    })
}

const getMostUsage = (req, res) => {
    pool.query(queries.mostUsage, (err, result) => {
        if (err) {
            throw err;
        }
        else {
            res.status(200).json(result.rows);
        }
    })
}

module.exports = {
    getData,
    getPostById,
    getMostQuestionAnswered,
    getPercentageOfAnsweredPosts,
    getTopReputationUser,
    getTopUpvotedPosts,
    getTagsAssosiatedWithMostPost,
    getQuestionsAskedEveryYear,
    getMostUsage,
    getScores,
}