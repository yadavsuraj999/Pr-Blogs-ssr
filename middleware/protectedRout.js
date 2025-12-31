const isLogin = (req, res, next) => {
    const { check } = req.cookies;
    if (!check) {
        return res.redirect("/auth/signin");
    }
    next();
}

module.exports = isLogin