const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

require("../db/conn");

const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send(`hello world from server router js`);
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, confirmPassword } = req.body;
  if (!name || !email || !phone || !work || !password || !confirmPassword) {
    return res.status(422).json({ error: "all field should be entered" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exits" });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds
    const hashedcPassword = await bcrypt.hash(confirmPassword, 10); // 10 is the saltRounds

    const user = new User({
      name,
      email,
      phone,
      work,
      password: hashedPassword,
      confirmPassword: hashedcPassword,
    });

    await user.save();
    res.status(201).json({ message: "User register successful" });
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "All fields should be entered" });
    }

    const userLogin = await User.findOne({ email: email });
    if (!userLogin) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Compare hashed passwords
    const isPasswordMatch = await bcrypt.compare(password, userLogin.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    res.json({ message: "Sign-in successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

