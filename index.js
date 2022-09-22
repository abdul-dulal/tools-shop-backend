const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const handleProduct = require("./routes/Product");
const handleReview = require("./routes/HandleReview");
const hanldeOrder = require("./routes/HandleOrder");
const hanldeUser = require("./routes/HandleUser");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGOOSE_URI)
  .then(() => {
    console.log("database connect");
  })
  .catch((err) => {
    err.message;
  });

// payment
app.post("/create-payment-intent", async (req, res) => {
  const service = req.body;
  const price = service.price;
  const amount = price * 100;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });
  res.send({ clientSecret: paymentIntent.client_secret });
});

// Product
app.use("/product", handleProduct);

// Review
app.use("/review", handleReview);

//order
app.use("/order", hanldeOrder);
//  user

app.use("/user", hanldeUser);

app.get("/", (req, res) => {
  res.send("hello  Tools-Shop");
});

const errorHandeler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({
    error: err,
  });
};
app.listen(port, () => {
  console.log("listenig port 3000");
});
