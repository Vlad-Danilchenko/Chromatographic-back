const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../utils");

const deviceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    model: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

deviceSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  name: Joi.string().required(),
  model: Joi.string().required(),
  status: Joi.string().required(),
});

const schemas = {
  addSchema,
};

const Device = model("device", deviceSchema);

module.exports = { Device, schemas };
