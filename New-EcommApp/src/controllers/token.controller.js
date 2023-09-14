const { tokenService } = require("../services");


/**create Token */
const generateToken=async (req,res)=>{
    try{
        const reqBody=req.body;

        /**create token in jwt */
        const token=await tokenService.generateToken(reqBody);

        reqBody.token=token;
        // console.log(token);

        /** Save token in our database */
        const saveToken = await tokenService.saveToken(reqBody);
        res.status(200).json(
            { success: true,
             message: "Token created!",
             data: saveToken
             }
            );
    }catch(error){
        res.status(400).json({
            success: false,
            message: error.message || "Something went wrong!",
          });
    }
};

/**VerifyToken */
const verifyToken=async(req,res)=>{
    res.status(200).json({
        success: true,
        message: "Token successfully verified!",
        data: req.user,
      });
};

module.exports={
    generateToken,
    verifyToken
}