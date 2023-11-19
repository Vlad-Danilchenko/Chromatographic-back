const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId) {
    next(HttpError(404, `${id} invalid format`));
  }
  next();
};

module.exports = isValidId;
