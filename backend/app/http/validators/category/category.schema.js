const Joi = require("joi");
const createHttpError = require("http-errors");

const addCategorySchema = Joi.object({
  title: Joi.string()
    .required()
    .min(3)
    .max(100)
    .error(createHttpError.BadRequest("The category title is invalid")),
  englishTitle: Joi.string()
    .required()
    .min(3)
    .max(100)
    .error(
      createHttpError.BadRequest("The category English title is invalid")
    ),
  description: Joi.string()
    .required()
    .min(3)
    .max(200)
    .error(createHttpError.BadRequest("The category description is invalid")),
});

const updateCategorySchema = Joi.object({
  title: Joi.string()
    .min(3)
    .max(100)
    .error(createHttpError.BadRequest("The category title is invalid")),
  englishTitle: Joi.string()
    .min(3)
    .max(100)
    .error(
      createHttpError.BadRequest("The category English title is invalid")
    ),
  description: Joi.string()
    .required()
    .min(3)
    .max(200)
    .error(createHttpError.BadRequest("The category description is invalid")),
});

module.exports = {
  addCategorySchema,
  updateCategorySchema,
};
