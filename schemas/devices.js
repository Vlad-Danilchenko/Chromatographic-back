const Joi = require("joi");

const addSchema = Joi.object({
  id: Joi.string().required(),
  model: Joi.string().required(),
  status: Joi.string().required(),
});

module.exports = { addSchema };
