const { type } = require("@testing-library/user-event/dist/type");

// import {Schema} from "mongoose"
const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  //   date: {
  //     type: String,
  //     required: Date.now,
  //   },
});

const User = mongoose.model("user", UserSchema);
// User.createIndexes();
module.exports = User;
