const express = require("express");
const User = require("../models/User");
const { default: mongoose } = require("mongoose");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "your_jwt_secret_key"; // Define your JWT secret key here
const fetchuser = require('../middleware/fetchUser')
const router = express.Router();

// Route 1 : create a user using : POST "/api/auth/createuser". Doesn't require auth. No login required

router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a valid password of atleadt characters 5").isLength(
      { min: 5 }
    ),
  ],
  async (req, res) => {
    // if there are errors, return bad req and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // check whether the user with email exists
    try {
      success = false;
      let user = await User.findOne({ email: req.body.email });
      console.log(user);

      if (user) {
        
        return res
          .status(400)
          .json({ success, error: "Sorry a user with same email exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const securedPwd = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: securedPwd,
      });

      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      success = true;
      console.log(success, authToken);

      // res.json(user);
      res.json({ success, authToken });

      console.log(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error : Some error occurred");
    }
  }
);

// Route 2: authenticate a user using : POST "/api/auth/login".  No login required
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "password cannot be blank").exists(),
  ],
  async (req, res) => {
    // if there are errors, return bad req and the errors
    success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        let success = false;
        return res
          .status(400)
          .json({ success, error: "Please try to login with correct credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res
          .status(400)
          .json({ success, error: "Please try to login with correct credentials" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error: Some error occurred");
    }
  }
);

// Route 3: Get LoggedIn user details using POST : "api/auth/getuser". Login required
router.post("/getuser", fetchuser, async (req, res) => {

  try {
    userId = req.user.id;
    // userId = "todo";
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error: Some error occurred");
  }
});

module.exports = router;
