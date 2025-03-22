const express = require("express");
const User = require("../models/User");
const { default: mongoose } = require("mongoose");
const { body, validationResult } = require("express-validator");

const router = express.Router();

// create a user using : POST "/api/auth/createuser". Doesn't require auth. No login required

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
      let user = await User.findOne({ email: req.body.email });
      console.log(user);

      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with same email exists" });
      }
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occurred")
    }
  }
);

module.exports = router;
