const express = require("express");
const router = express.Router();
const mainControllers = require('../controllers/mainControllers.js');


//Fetch All Data
router.get("/", mainControllers.getMain);
router.get("/1", mainControllers.getMainTwo);
router.get("/2", mainControllers.getMainThree);

module.exports = router