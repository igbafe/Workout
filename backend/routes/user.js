const express = require("express");

// controller functions

const { singupUser, loginUser } = require("../controllers/userController.js");

const router = express.Router();

// login routes
router.post("/login", loginUser);

// signup routes
router.post("/signup", singupUser);

module.exports = router;
