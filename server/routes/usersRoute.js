const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

// new user Register
router.post("/register", async (req, res) => {
  // always write a try..catch block for async/await or any endpoint
  try {
    // check that if the user already exists
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      throw new Error("User already exists");
    }

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    // create new user
    const newUser = new User(req.body);
    await newUser.save();
    res.send({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});
