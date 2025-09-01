const express = require("express");
const router = express.Router();
const { loginSociety } = require("../controllers/authController");

router.post("/login", loginSociety);

module.exports = router;
