const express = require("express");
const { validateBody } = require("../../utils");
const { schemas } = require("../../models/device");
const { isValidId, authenticate } = require("../../middlewares");

const ctrl = require("../../controllers/devices-controllers");

const router = express.Router();

router.get("/", authenticate, ctrl.getAllDevices);

router.get("/:id", authenticate, isValidId, ctrl.getDeviceById);

router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.addDevice);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateDevice
);

router.delete("/:id", authenticate, isValidId, ctrl.deleteDevice);

module.exports = router;
