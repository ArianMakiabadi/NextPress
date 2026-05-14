const Joi = require("joi");
const createHttpError = require("http-errors");

async function validateSignupSchema(data) {
  const signupSchema = Joi.object({
    name: Joi.string()
      .required()
      .min(5)
      .max(50)
      .error(createHttpError.BadRequest("The entered username is invalid")),
    email: Joi.string()
      .required()
      .email()
      .error(createHttpError.BadRequest("The entered email is invalid")),
    password: Joi.string()
      .min(8)
      .required()
      .error(createHttpError.BadRequest("Password must be at least 8 characters long")),
  });
  return await signupSchema.validateAsync(data);
}
async function validateSigninSchema(data) {
  const signupSchema = Joi.object({
    email: Joi.string()
      .required()
      .email()
      .error(createHttpError.BadRequest("The entered email is invalid")),
    password: Joi.string()
      .min(8)
      .required()
      .error(createHttpError.BadRequest("Password must be at least 8 characters long")),
  });
  return await signupSchema.validateAsync(data);
}

async function validateUpdateProfileSchema(data) {
  const updateProfileSchema = Joi.object({
    name: Joi.string()
      .min(5)
      .max(50)
      .required()
      .error(createHttpError.BadRequest("The entered username is invalid")),
    email: Joi.string()
      .required()
      .email()
      .error(createHttpError.BadRequest("The entered email is invalid")),
    biography: Joi.string()
      .max(30)
      .allow("")
      .error(createHttpError.BadRequest("The expertise field is invalid.")),
  });
  return updateProfileSchema.validateAsync(data);
}

module.exports = {
  validateUpdateProfileSchema,
  validateSignupSchema,
  validateSigninSchema,
};
