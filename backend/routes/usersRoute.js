const express = require("express");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });

    if (!user) {
      console.log("user not found");
      return res.status(400).json(error);
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json(error);
    } else {
      res.send(user);
    }
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const existUsername = await User.findOne({ username: req.body.username });
    if (existUsername) {
      console.log("username taken");
      return res.status(400).json(error);
    } else {
      const salt = await bcrypt.genSaltSync(10);
      const hash = await bcrypt.hashSync(req.body.password, salt);
      const newUser = new User({ ...req.body, password: hash });
      const user = await newUser.save();
      res.send(user);
    }
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
