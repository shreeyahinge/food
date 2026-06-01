const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  items: [
    {
      name: String,
      price: Number
    }
  ],
  total: Number
});

module.exports = mongoose.model("Order", OrderSchema);