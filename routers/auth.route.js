const express = require("express");
const { getSignUp, getSignIn, signUpUser, signinUser, logOut } = require("../controllers/authController");
const router = express.Router();

router.get("/signin", getSignIn)
router.get("/signup", getSignUp)
router.post("/signup", signUpUser)
router.post("/signin", signinUser)
router.post("/log-out", logOut)

module.exports = router