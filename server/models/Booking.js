const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = Schema(
  {
    clinic: { type: Schema.Types.ObjectId, required: true, ref: "Clinic" },
    doctor: { type: Schema.Types.ObjectId, required: true, ref: "Doctor" },
    content: {
      reason: { type: String, required: true },
      // doctor: { lam giong reactions},
    },
  },
  { timestamps: true }
);
const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
