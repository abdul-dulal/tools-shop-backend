const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = Schema({
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = userSchema;
