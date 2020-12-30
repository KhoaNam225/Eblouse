const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctorSchema = Schema({
  clinic: { type: Schema.Types.ObjectId, reuqired: true, ref: "Clinic" },
  booking: { type: Schema.Types.ObjectId, reuqired: true, ref: "Booking" },
  name: { type: String, required: true },
  gender: { type: String, enum: ["F", "M", "Other"] },
  specialization: {
    type: String,
    enum: ["Eye, Nose & Throat", "Cardiologist", "Dentist", "Dermatology"],
  },
  isBooked: [{ type: String }], // "8"
  status: { type: String, enum: ["available", "busy", "not working"] },
});

const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;

// isBooked = [6, 8]
// [6, 7, 8, 9]
// Shows [7, 9]
