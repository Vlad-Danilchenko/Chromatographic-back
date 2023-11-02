const devices = require("./devices");

const invokeAction = async ({ action, id, model, status }) => {
  switch (action) {
    case "list":
      const allChromatographs = await devices.getAll();
      return console.log(allChromatographs);

    case "readById":
      const aparatus = await devices.getById(id);
      return console.log(aparatus);

    case "add":
      const newDevice = await devices.add({ id, model, status });
      return console.log(newDevice);

    case "updateById":
      const updateDevice = await devices.updateById(id, { model, status });
      return console.log(updateDevice);

    case "deleteById":
      const deleteById = await devices.deleteById(id);
      return console.log(deleteById);
  }
};

// invokeAction({ action: "list" });
// invokeAction({ action: "readById", id: "LC-002" });
// invokeAction({
//   action: "add",
//   id: "LC-003",
//   model: "1100",
//   status: "ready to work",
// });
// invokeAction({
//   action: "updateById",
//   id: "LC-002",
//   model: "1100",
//   status: "ready to work",
// });
invokeAction({
  action: "deleteById",
  id: "LC-002",
});
