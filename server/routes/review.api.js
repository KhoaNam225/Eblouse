const express = require("express");
const { route } = require("./auth.api");
const { body, param } = require("express-validator");
const router = express.Router();
const reviewController = require("../controllers/review.controller");
const validators = require("../middlewares/validator");

/**
 * @route POST api/reviews/clinics/:id
 * @description Create a new review for a blog
 * @access Login required
 */
router.post(
  "/clinic/:id",
  // authMiddleware.loginRequired,
  validators.validate([
    param("id").exists().isString().custom(validators.checkObjectId),
    body("content", "Missing content").exists().notEmpty(),
  ]),
  reviewController.createNewReview
);
module.exports = router;
