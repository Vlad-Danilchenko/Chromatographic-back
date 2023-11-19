const express = require("express");
const { validateBody } = require("../../utils");
const { schemas } = require("../../models/device");
const { isValidId } = require("../../middlewares");

const ctrl = require("../../controllers/devices-controllers");

const router = express.Router();

router.get("/", ctrl.getAllDevices);

router.get("/:id", isValidId, ctrl.getDeviceById);

router.post("/", validateBody(schemas.addSchema), ctrl.addDevice);

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateDevice
);

router.delete("/:id", isValidId, ctrl.deleteDevice);

module.exports = router;
