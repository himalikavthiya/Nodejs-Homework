const multer = require("multer");
const path = require("path");

//Configuration for Multer
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
      cb("Only .png, .jpg and .jpeg format are allowed!");
    }
    cb(null, new Date().getTime() + ext);
  },
});

  //Calling the "multer" Function
const upload = multer({
    storage: multerStorage,
    });

module.exports = { upload };
