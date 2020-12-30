const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema(
  {
    name: { type: String, required: true },
    detail: {
      fullname: { type: String },
      gender: ["F", "M", "Other"],
      bloodType: [
        "A Rh+",
        "A Rh-",
        "B Rh+",
        "B Rh-",
        "AB Rh+",
        "AB Rh-",
        "O Rh+",
        "O Rh-",
      ],

      idCard: { type: Number },
      career: { type: String },
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
