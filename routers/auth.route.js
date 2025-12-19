const express = require("express");
const { getSignUp, getSignIn, signinUser } = require("../controllers/authController");
const router = express.Router();

router.get("/signin", getSignIn)
router.get("/signup", getSignUp)
router.post("/signin", signinUser)

module.exports = router



// app.get( (req, res) => {
//     return res.render("signin")
// })

// app.get("/signup", (req, res) => {
//     return res.render("signup")
// })