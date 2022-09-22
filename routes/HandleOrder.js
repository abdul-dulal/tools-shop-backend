const router = require("express").Router();
const mongoose = require("mongoose");
const orderSchema = require("../schemas/OrderSchema");
const Order = mongoose.model("Order", orderSchema);

router.post("/myorder", async (req, res) => {
  console.log(req.body);
  const newOrder = new Order(req.body);
  try {
    await newOrder.save();
    res.json({
      message: "Success",
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

router.get("/orderByEmail", async (req, res) => {
  try {
    const order = await Order.find({ user: req.query.email });
    res.send(order);
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

router.delete("/deleteOrder/:id", async (req, res) => {
  try {
    const deleteItem = await Order.findByIdAndDelete({ _id: req.params.id });
    res.send(deleteItem);
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

router.get("/manage_order", async (req, res) => {
  try {
    const order = await Order.find({});
    res.send(order);
  } catch (err) {
    message: err.message;
  }
});
// payment
router.get("/order_byId/:id", async (req, res) => {
  try {
    const product = await Order.findOne({ _id: req.params.id });
    res.send(product);
  } catch (err) {
    message: err.message;
  }
});

router.put("/order/:id", async (req, res) => {
  const paymentDetails = req.body;
  console.log(paymentDetails);
  try {
    const orderDetails = await Order.findOne({ _id: req.params.id });
    console.log(orderDetails);
    res.send(orderDetails);
  } catch (err) {
    message: err.message;
  }
});
module.exports = router;
