const router = require("express").Router();
const mongoose = require("mongoose");
const proudctSchema = require("../schemas/ProductSchem");

const Product = mongoose.model("Products", proudctSchema);

// post a single product

router.post("/post", async (req, res) => {
  console.log(req.body);
  const newProduct = Product(req.body);
  try {
    await newProduct.save();
    res.json({
      message: "Success",
    });
  } catch (err) {
    res.send(err.message);
  }
});

// get product
router.get("/getProduct", async (req, res) => {
  try {
    const product = await Product.find({}).skip(0).limit(6);
    res.send(product);
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

// flash deals

router.get("/flash-deals", async (req, res) => {
  try {
    const fleashDeals = await Product.find({}).skip(6).limit(6);
    res.send(fleashDeals);
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

router.get("/allProduct", async (req, res) => {
  try {
    const data = await Product.find({});
    res.send(data);
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});
// purchase

router.get("/purchase/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const purchaseProduct = await Product.findOne({ _id: req.params.id });
    res.send(purchaseProduct);
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

module.exports = router;
