const isLogin = (req, res, next) => {
    const { check } = req.cookies;
    console.log(req.cookies);
    if (!check) {
        return res.redirect("/");
    }
    next();
}

module.exports = isLogin