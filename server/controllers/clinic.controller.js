const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../helpers/utils.helper");
const Clinic = require("../models/Clinic");
const Review = require("../models/Review");
const Doctor = require("../models/Doctor");
const Booking = require("../models/Booking");

const clinicController = {};
//  user can search clinic by query in category
clinicController.getSearchCategory = catchAsync(async (req, res, next) => {
  let { query } = req.body;
  let clinicList = await Clinic.findOne({ query });
  if (!clinicList)
    return next(new AppError(404, "Sepecialization not found", "Query Error"));
  return sendResponse(res, 200, true, { query }, null, "Query success");
});
//  user can get detail of clinic
clinicController.getSingleClinic = catchAsync(async (req, res, next) => {
  let clinic = await Clinic.findById(req.params.id);
  if (!clinic)
    return next(
      new AppError(404, "clinic not found", " Get single clinic Error")
    );
  blog.reviews = await Review.find({ doctor: doctor._id }).populate("clinic");
  return sendResponse(
    res,
    200,
    true,
    { clinic },
    null,
    "get single blog success"
  );
});
// user can see the clinic list
clinicController.getListOfClinic = catchAsync(async (req, res, next) => {
  let { page, limit } = { ...req.query };
  page = parseInt(page) || 1;
  limit = parseInt(limit) || 10;
  const totalClinic = await Clinic.countDocuments();
  const totalPages = Math.ceil(totalClinic / limit);
  const offset = limit * (page - 1);

  const clinics = await Clinic.find({}).skip(offset).limit(limit);
  return sendResponse(
    res,
    200,
    true,
    { clinics, totalClinic, totalPages },
    null,
    "get list of Clinic success"
  );
});

module.exports = clinicController;
