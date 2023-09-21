const multer = require("multer");
const path = require("path");
const fs = require("fs");


//Configuration for Multer
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname == "Images"){
      fs.mkdirSync(path.join(__dirname, "../public/images"),{
        recursive: true,
      });
      cb(null, path.join(__dirname, "../public/images"));
    }
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, new Date().getTime() + ext);
  },
});

  //Calling the "multer" Function
const upload = multer({
    storage: multerStorage,
    });

module.exports = { upload };
