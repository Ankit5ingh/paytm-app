const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/paytm');

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
  },
  lastname: {
    type: String,
    minlength: 3,
    maxlength: 30,
  },
  email: {
    type: String,
    minlength: 3,
    maxlength: 30,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

const User = user.model("User", userSchema);
export {User};