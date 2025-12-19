const UserModel = require("../models/userModle")

const getSignUp = (req, res) => {
    return res.render("signup")
}

const getSignIn = (req, res) => {
    return res.render("signin")
}

const signinUser = async (req, res) => {
    try {
        console.log(req.body);
        const userData = new UserModel(req.body)
    } catch (error) {
        
    }
}

module.exports = { getSignUp, getSignIn, signinUser }