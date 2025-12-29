const isLogin = (req, res, next) => {
    const { check } = req.cookies;
    if (!check) {
        return res.redirect("/");
    }
    next();
}

module.exports = isLogin