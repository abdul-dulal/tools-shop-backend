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
  paid: {
    type: Boolean,
  },
  transactionId: {
    type: String,
  },
});

module.exports = orderSchema;
