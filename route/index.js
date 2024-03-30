const express = require("express");
const router = express.Router();
const details = require("./detail");
const cars = require("./car");

router.use("/details", details);
router.use("/cars", cars);

module.exports = router;