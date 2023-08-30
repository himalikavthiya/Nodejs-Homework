const Joi=require('joi');

/**create mobile data validation */
const createMobile={
    body:Joi.object().keys({
        brand:Joi.string().required().trim(),
        model:Joi.string().required().trim(),
        displaySize:Joi.string().required().trim(),
        processor:Joi.string().required().trim(),
        storage:Joi.string().required().trim(),
        operatingSystem:Joi.string().required().trim(),
        price:Joi.string().required().trim()
    })
};

module.exports={
    createMobile
}