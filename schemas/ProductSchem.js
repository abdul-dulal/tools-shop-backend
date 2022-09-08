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
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },

  minQuantity: {
    type: Number,
    required: true,
  },
});

module.exports = proudctSchema;
