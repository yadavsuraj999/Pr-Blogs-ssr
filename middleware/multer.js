const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "uploads");
    },
    filename: (req, res, cb) => {
        const uploadFileName = Date.now() + "-" + file.orginalname;
        cb(null, uploadFileName)
    }
})

const upload = multer({ storage });

module.exports = upload;