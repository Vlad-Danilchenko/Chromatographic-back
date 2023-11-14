const fs = require("fs/promises");
const path = require("path");

const devicesPath = path.join(__dirname, "devices.json");

const getAll = async () => {
  const data = await fs.readFile(devicesPath);
  return JSON.parse(data);
};

const getById = async (id) => {
  const devices = await getAll();
  const result = devices.find((item) => item.id === id);
  return result || null;
};

const add = async ({ id, model, status }) => {
  const devices = await getAll();
  const newDevice = {
    id,
    model,
    status,
  };
  devices.push(newDevice);
  await fs.writeFile(devicesPath, JSON.stringify(devices, null, 2));
  return newDevice;
};

const updateById = async (id, data) => {
  const devices = await getAll();
  const index = devices.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  devices[index] = { id, ...data };
  await fs.writeFile(devicesPath, JSON.stringify(devices, null, 2));
  return devices[index];
};

const deleteById = async (id) => {
  const devices = await getAll();
  const index = devices.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }

  const [result] = devices.splice(index, 1);
  await fs.writeFile(devicesPath, JSON.stringify(devices, null, 2));
  return result;
};

module.exports = {
  getAll,
  getById,
  add,
  updateById,
  deleteById,
};
