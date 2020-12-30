const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clinicSchema = Schema({
  clinic: { type: Schema.Types.ObjectId, required: true },
  doctor: { type: Schema.Types.ObjectId, required: true, ref: "Doctor" },
  specialization: {
    type: String,
    required: true,
    enum: ["Eye, Nose & Throat", "Cardiologist", "Dentist", "Dermatology"],
  },
  services: {
    type: String,
    required: true,
    enum: ["Medical Test", "Endoscopy", "ultrasonography"],
  },
  languages: {
    type: String,
    required: true,
    enum: ["Vietnames", "English", "Chinese", "Korean"],
  },
  registerNumber: { type: String, required: true },
  statement: { type: String, required: true },
  images: [],
  rated: { type: Number, required: true, enum: ["1", "2", "3", "4", "5"] },
  address: { type: String, reuqired: true },
  review: { type: String, required: true },
});

const Clinic = mongoose.model("Clinic", clinicSchema);
module.exports = Clinic;
