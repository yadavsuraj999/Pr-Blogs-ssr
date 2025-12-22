
const index = (req, res) => {
    try {
        res.render("index")
    } catch (error) {

    }
}

module.exports = { index }