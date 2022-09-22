const router = require("express").Router();
const mongoose = require("mongoose");
const checkLogin = require("./middleware/CheckLogin");
const userSchema = require("../schemas/userSchema");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = mongoose.model("User", userSchema);

router.post("/signup", async (req, res) => {
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

router.post("/login", async (req, res) => {
  const user = await User.find({ email: req.body.email });

  try {
    if (user) {
      const isVaildPassword = await bcrypt.compare(
        req.body.password,
        user[0].password
      );
      if (isVaildPassword) {
        const token = jwt.sign(
          {
            email: user[0]?.email,
            userId: user[0]?._id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );

        res.send(token);
      } else {
        res.json({
          error: "fail",
        });
      }
    } else {
      res.json({
        error: "fail2",
      });
    }
  } catch (err) {
    res.send(err.message);
  }
});
router.get("/all_user", checkLogin, async (req, res) => {
  try {
    const user = await User.find({});
    res.send(user);
  } catch (err) {
    message: err.message;
  }
});

router.put("/makeAdmin/:email", checkLogin, async (req, res) => {
  const data = req.params.email;
  const requester = req.email;
  try {
    const requsterAccount = await User.findOne({ email: requester });
    if (requsterAccount.role === "admin") {
      const result = await User.findOneAndUpdate(
        { email: data },
        {
          $set: {
            role: req.body.role,
          },
        }
      );

      res.send(result);
    }
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

router.get("/check_admin/:email", checkLogin, async (req, res) => {
  try {
    const email = req.params.email;
    const admin = await User.find({ email });
    const isadmin = admin[0].role === "admin";
    res.send({
      admin: isadmin,
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});
module.exports = router;
