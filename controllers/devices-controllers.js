const { Device } = require("../models/device");
const { HttpError } = require("../helpers");
const ctrlWrapper = require("../utils/ctrlWrapper");

const getAllDevices = async (req, res) => {
  const result = await Device.find();
  res.json(result);
};

const getDeviceById = async (req, res) => {
  const { id } = req.params;
  const result = await Device.findById(id);

  if (!result) {
    throw HttpError(404, `Device with id: ${id} not found`);
  }

  res.json(result);
};

const addDevice = async (req, res) => {
  const result = await Device.create(req.body);
  res.status(201).json(result);
};

const updateDevice = async (req, res) => {
  const { id } = req.params;
  const result = await Device.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, `Device with id: ${id} not found`);
  }
  res.json(result);
};

const deleteDevice = async (req, res) => {
  const { id } = req.params;
  const result = await Device.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, `Device with id: ${id} not found`);
  }
  res.json(result);
};

module.exports = {
  getAllDevices: ctrlWrapper(getAllDevices),
  getDeviceById: ctrlWrapper(getDeviceById),
  addDevice: ctrlWrapper(addDevice),
  updateDevice: ctrlWrapper(updateDevice),
  deleteDevice: ctrlWrapper(deleteDevice),
};
