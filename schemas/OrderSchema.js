const mongoose = require("mongoose");

const { Schema } = mongoose;

const orderSchema = Schema({
  pName: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = orderSchema;
