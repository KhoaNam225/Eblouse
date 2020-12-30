const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = Schema(
  {
    clinic: { type: Schema.Types.ObjectId, required: true, ref: "Clinic" },
    from: { type: Schema.Types.ObjectId, reuqired: true, ref: "User" },
    to: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    content: { type: String, reuqired: true },
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
