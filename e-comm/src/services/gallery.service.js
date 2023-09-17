const { Gallery } = require("../models");

/**create gallery */
const createGallery = async (reqBody) => {
  return Gallery.create(reqBody);
};

/**get gallery img */
const getGallery=async(req,res)=>{
  return Gallery.find();
}

module.exports = {
  createGallery,
  getGallery
}
