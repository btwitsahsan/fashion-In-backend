const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: [
    {
      name: String,
      price: Number,
      quantity: Number,
      image: [],
    },
  ],
  totalPrice: Number,
  shippingInfo: {
    name: String,
    phoneNo: Number,
    address: String,
    city: String,
    postalCode: String,
  },
  status: {
    type: String,
    default: "Processing",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
