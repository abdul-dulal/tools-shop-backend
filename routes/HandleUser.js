const router = require("express").Router();
const mongoose = require("mongoose");
const userSchema = require("../schemas/userSchema");
const bcrypt = require("bcrypt");
const User = mongoose.model("User", userSchema);
router.post("signup", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      email: req.body.email,
      password: hashedPassword,
    });
    newUser.save();
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

module.exports = router;
