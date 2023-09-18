/* eslint-disable no-undef */
const { Router } = require("express");
const controller = require('./controller.js');

const router = Router();

router.get("/", controller.getData);
router.get("/post/:id", controller.getPostById);
router.get("/percentageOfAnsweredPosts", controller.getPercentageOfAnsweredPosts);
router.get("/topReputationUser", controller.getTopReputationUser);
router.get("/mostQuestionAnswered", controller.getMostQuestionAnswered);
router.get("/topUpvotedPosts", controller.getTopUpvotedPosts);
router.get("/tagsAssosiatedWithMostPost", controller.getTagsAssosiatedWithMostPost);
router.get("/questionsAskedEveryYear", controller.getQuestionsAskedEveryYear);
router.get("/mostUsage", controller.getMostUsage);
router.get("/scores", controller.getScores);
module.exports = router;