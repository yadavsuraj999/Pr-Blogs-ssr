const UserModel = require("../models/userModle")

const getSignUp = (req, res) => {
    return res.render("signup")
}

const getSignIn = (req, res) => {
    return res.render("signin")
}

const signUpUser = async (req, res) => {
    try {
        console.log(req.body);
        const userData = new UserModel(req.body)
        await userData.save();
        res.redirect("/auth");
    } catch (error) {
        console.log(error)
    }
}

const signinUser = async (req, res) => {
    try {
        const credentials = req.body;
        const loginUser = await UserModel.findOne(credentials);
        if (!loginUser) {
            return res.send("invalid user Name or Password...!");
        }
        res.cookie("check", loginUser.id, {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true
        })
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
}
const logOut = (req, res) => {
    res.clearCookie("check");
    res.redirect("/auth");
}

module.exports = { getSignUp, getSignIn, signUpUser, signinUser, logOut }