const mongoose = require("mongoose");

const { Schema } = mongoose;

const proudctSchema = Schema({
  pName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  img: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },

  miniumqnt: {
    type: String,
    required: true,
  },
});

module.exports = proudctSchema;
