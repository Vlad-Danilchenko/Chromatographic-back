const fs = require("fs/promises");
const path = require("path");

const chromatographsPath = path.join(__dirname, "chromatographs.json");

const getAll = async () => {
  const data = await fs.readFile(chromatographsPath);
  return JSON.parse(data);
};
module.exports = {
  getAll,
};
