const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../helpers/utils.helper");
const Clinic = require("../models/Clinic");
const Review = require("../models/Review");
const reviewController = {};

reviewController.createNewReview = catchAsync(async (req, res, next) => {
  // const userId = req.userId;
  const clinicId = req.params.id;
  const { content } = req.body;

  const clinic = Clinic.findById(clinicId);
  if (!clinic)
    return next(
      new AppError(404, "Clinic not found", "Create new Review Error")
    );
  let review = await Review.create({
    // user: userId,
    clinic: clinicId,
    content,
  });
  review = await Review.populate("User").populate("Clinic").execPopulate();
  return sendResponse(
    res,
    200,
    true,
    { review },
    null,
    "Create new review successful"
  );
});

module.exports = reviewController;
