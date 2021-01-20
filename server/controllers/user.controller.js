const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../helpers/utils.helper");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const Clinic = require("../models/Clinic");
const Booking = require("../models/Booking");
// const Conversation = require("../models/Conversation");

const userController = {};

userController.register = catchAsync(async (req, res, next) => {
  let { name, email, password, avatarUrl } = req.body;
  let user = await User.findOne({ email });
  if (user)
    return next(new AppError(400, "User already exists", "Registration Error"));

  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt);
  user = await User.create({
    name,
    email,
    password,
    avatarUrl,
  });
  const accessToken = await user.generateToken();

  // const emailData = await emailHelper.renderEmailTemplate(
  //   "welcome_email",
  //   { name: name },
  //   email
  // );

  // if (!emailData.error) {
  //   emailHelper.send(emailData);
  // }

  return sendResponse(
    res,
    200,
    true,
    { user, accessToken },
    null,
    "Create user successful"
  );
});

userController.getCurrentUser = catchAsync(async (req, res, next) => {
  const userId = req.userId;
  const user = await User.findById(userId);
  console.log(user);
  if (!user)
    return next(new AppError(400, "User not found", "Get Current User Error"));
  return sendResponse(res, 200, true, user, null, "Get current user sucessful");
});

userController.getUsers = catchAsync(async (req, res, next) => {
  let { page, limit, sortBy, ...filter } = req.query;

  const currentUserId = req.userId;
  page = parseInt(page) || 1;
  limit = parseInt(limit) || 10;

  const totalNumUsers = await User.find({ ...filter }).countDocuments();
  const totalPages = Math.ceil(totalNumUsers / limit);
  const offset = limit * (page - 1);

  const users = await User.find({ ...filter })
    .sort({ ...sortBy, createdAt: -1 })
    .skip(offset)
    .limit(limit);

  return sendResponse(res, 200, true, { users, totalPages }, null, "");
});

// userController.getConversationList = catchAsync(async (req, res, next) => {
//   let { page, limit } = req.query;

//   const currentUserId = req.userId;
//   page = parseInt(page) || 1;
//   limit = parseInt(limit) || 10;

//   const totalNumConversation = await Conversation.find({
//     users: currentUserId,
//   }).countDocuments();
//   const totalPages = Math.ceil(totalNumConversation / limit);
//   const offset = limit * (page - 1);

//   let conversations = await Conversation.find({
//     users: currentUserId,
//   })
//     .sort({ updatedAt: -1 })
//     .skip(offset)
//     .limit(limit)
//     .populate("users");

//   return sendResponse(
//     res,
//     200,
//     true,
//     { conversations, totalPages },
//     null,
//     null
//   );
// });

userController.createNewBooking = catchAsync(async (req, res, next) => {
  const userID = req.userId;
  const toClinicId = req.params.id;

  const clinic = await Clinic.findById(toClinicId);
  if (!clinic) {
    return next(
      new AppError(400, "Clinic not found", "Send booking request error")
    );
  }
  let bookingRelate = await Booking.findOne({
    from: userID,
    clinic: toClinicId,
  });
  if (!bookingRelate) {
    await Booking.create({
      from: userID,
      clinic: toClinicId,
      status: "Pending",
      startTime,
      endTime,
    });
    return sendResponse(res, 200, true, null, null, "Request has been sent");
  } else {
    switch (bookingRelate.status) {
      case "Pending":
        return next(
          new AppError(
            400,
            "You have received a request from this user",
            "Send request success"
          )
        );
        break;
      case "Active":
        return next(
          new AppError(400, "your booking has been booked ", "Booking error")
        );
        break;
      case "Cancelled":
      case "Done":
        bookingRelate.from = userID;
        bookingRelate.clinic = toClinicId;
        bookingRelate.status = "Pending";
        await bookingRelate.save();
        return sendResponse(res, 200, null, null, "Request has been sent");
        break;
      default:
        break;
    }
  }
});

module.exports = userController;
