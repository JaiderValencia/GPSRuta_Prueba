const express = require("express");
const router = express.Router();

const recivedController = require("../controllers/recivedController");

router.get("/:dato", recivedController.main);

module.exports = router;
