const express = require("express");
const { userValidation } = require("../../validations");
const { userController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const router = express.Router();
// const Joi=require('joi')

/*create user*/
router.post(
  "/create-user",
  validate(userValidation.createUser),
  userController.createUser);

/**Get user List */
router.get(
  "/list",
  validate(userValidation.getUserList),
  userController.getUserList
);

/**delete user List */
router.delete("/deleteuser/:userId", userController.deleteUser);

/**upadte user List */
router.put("/updateuser/:userId", userController.updateUser);

/** Send mail */
router.post(
  "/send-mail",
  validate(userValidation.sendMail),
  userController.sendMail
);

module.exports = router;
// async(req, res, next) => { 
//   const { body } = req; 
//   const result = Joi.validate(body, createUser); 

//   const { value, error } = result; 

//   const valid = error == null; 

//   if (!valid) { 
//     res.status(422).json({ 
//       message: 'Invalid request', 
//       data: body 
//     }) 
//   } else { 
//     const createdPost = await api.createPost(data); 
//     res.json({ message: 'Resource created', data: createdPost }) 
//   } 
// } ,
// userController.createUser