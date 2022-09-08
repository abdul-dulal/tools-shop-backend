const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReviewSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
});

module.exports = ReviewSchema;
