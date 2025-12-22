const express = require("express");
const { index } = require("../controllers/blogContoller");
const router = express.Router();

router.get("/", index)




module.exports = router