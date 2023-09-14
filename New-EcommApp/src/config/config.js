const joi = require("joi");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env"});

const envVarsSchema = joi
  .object({
    PORT: joi.number().default(5060),
    MONGODB_URL: joi.string().trim().description("mongodb url"),
    JWT_SECRET_KEY: joi.string()
    .description("Jwt sectreat key"),
 })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  console.log("Config Error:", error);
}

module.exports = {
  port: envVars.PORT,
  mongodb: {
    url: envVars.MONGODB_URL,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  jwt:{
    secret_key: envVars.JWT_SECRET_KEY,
  },
};
