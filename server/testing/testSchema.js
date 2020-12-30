const mongoose = require("mongoose");
const User = require("../models/User");
const Review = require("../models/Review");
const Booking = require("../models/Booking");
const Doctor = require("../models/Doctor");
const Clinic = require("../models/Clinic");

const faker = require("faker");
const bcrypt = require("bcryptjs");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const cleanData = async (startTime) => {
  try {
    // await User.collection.drop();
    // await Booking.collection.drop();
    await Review.collection.drop();
    // await Doctor.collection.drop();
    await Clinic.collection.drop();
    console.log("| Deleted all data");
    console.log("```----------------```");
  } catch (error) {
    console.log(error);
  }
};

const generateData = async () => {
  try {
    await cleanData();
    let clinics = [];
    let reviews = [];
    console.log("| Create 10 clinics");
    console.log("------------------------");
    const clinicNum = 10;
    const otherNum = 3; // num of clinic each user
    for (let i = 0; i < clinicNum; i++) {
      await Clinic.create({});
    }
  } catch (error) {
    console.log(error);
  }
};

const main = async (resetDB = false) => {
  if (resetDB) await generateData();
  getRandomBlogs(1);
};

main(false);
