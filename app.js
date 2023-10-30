const chromatographs = require("./chromatographs");

const invokeAction = async ({ action }) => {
  switch (action) {
    case "list":
      const allChromatographs = await chromatographs.getAll();
      return console.log(allChromatographs);
  }
};

invokeAction({ action: "list" });
