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

router.get("/orderByEmail/", async (req, res) => {
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
module.exports = router;
