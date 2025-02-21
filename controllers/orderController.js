const expressAsyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");



const placeOrder = expressAsyncHandler(async (req, res) => {
    const { items, totalPrice, shippingInfo } = req.body;

    if (!items || items.length === 0) {
      res.status(400);
      throw new Error("No items in order");
    }

    const order = await Order.create({
      items,
      totalPrice,
      shippingInfo,
      status: "Processing",
    });

    res.status(201).json({ message: "Order placed successfully!", order });
  })



  module.exports = {
    placeOrder
  }