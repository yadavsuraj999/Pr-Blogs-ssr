const express = require("express");
const authRouter = require("./routers/auth.route");
const app = express()
app.set('view engine', 'ejs');
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.static("uploads"))
const PORT = 8000;

// app.get("/", (req, res) => {
//     return res.render("index")
// })
// app.get("/add-blog", (req, res) => {
//     return res.render("addblog")
// })
// app.get("/view-blog", (req, res) => {
//     return res.render("viewBlog")
// })

app.use("/auth", authRouter)




app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})