const express = require("express");
const router = express.Router();
const mainControllers = require('../controllers/mainControllers.js');

//Fetch All Data
router.get("/index", mainControllers.getMain);

module.exports = router