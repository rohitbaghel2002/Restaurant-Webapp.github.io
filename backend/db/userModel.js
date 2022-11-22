const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [false, "Please provide an Name"],
    unique: [false],
  },
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },

  password: {
    type: String,
    required: [false, "Please provide a password!"],
    unique: false,
  },
  message: {
    type: String,
    required: [false, "Please provide an message"],
    unique: [false],
  },
  date: {
    type: String,
    required: [false, "Please provide an date"],
    unique: [false],
  },
  time: {
    type: String,
    required: [false, "Please provide an time"],
    unique: [false],
  },
});

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
