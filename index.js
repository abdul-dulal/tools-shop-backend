const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const handleProduct = require("./routes/Product");
const handleReview = require("./routes/HandleReview");
const hanldeOrder = require("./routes/HandleOrder");
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

// Product
app.use("/product", handleProduct);

// Review
app.use("/review", handleReview);

//order
app.use("/order", hanldeOrder);

app.get("/", (req, res) => {
  res.send("hello from Tools-Shop");
});

app.listen(port, () => {
  console.log("listenig port 3000");
});
