const router = require("express").Router();
const mongoose = require("mongoose");
const ReviewSchema = require("../schemas/ReviewSchema");
const { route } = require("./Product");

const Review = mongoose.model("Review", ReviewSchema);

router.post("/review", async (req, res) => {
  const review = new Review(req.body);
  try {
    await review.save();
    res.json({
      message: "Success",
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

router.get("/getReview", async (req, res) => {
  try {
    const review = await Review.find({});
    res.send(review);
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});
module.exports = router;
