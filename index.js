require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const authRouter = require("./routers/auth.route");
const indexRouter = require("./routers/index.route");

const app = express();

connectDB();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT;

app.use("/auth", authRouter);
app.use("/", indexRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
