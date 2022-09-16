const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = Schema({
  user: {
    type: String,
    required: true,
  },
  passwor: {
    type: String,
    required: true,
  },
});

module.exports = userSchema;
