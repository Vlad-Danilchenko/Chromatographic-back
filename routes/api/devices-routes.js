const express = require("express");
const { validateBody } = require("../../utils");
const schemas = require("../../schemas/devices");

const ctrl = require("../../controllers/devices-controllers");

const router = express.Router();

router.get("/", ctrl.getAllDevices);

router.get("/:id", ctrl.getDeviceById);

router.post("/", validateBody(schemas.addSchema), ctrl.addDevice);

router.put("/:id", validateBody(schemas.addSchema), ctrl.updateDevice);

router.delete("/:id", ctrl.deleteDevice);

module.exports = router;
