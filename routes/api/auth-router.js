const express = require("express");
const { validateBody } = require("../../utils");
const { schemas } = require("../../models/user");
const ctrl = require("../../controllers/auth-constrollers");
const { authenticate } = require("../../middlewares");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.post("/logout", authenticate, ctrl.logout);

router.get("/current", authenticate, ctrl.getCurrent);

module.exports = router;
