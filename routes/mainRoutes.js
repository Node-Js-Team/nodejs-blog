const express = require("express");
const router = express.Router();
const mainControllers = require('../controllers/mainControllers.js');


//Fetch All Data
router.get("/", mainControllers.getMain);
router.get("/yazi/:slug", mainControllers.getBlogDetail);
router.get("/kategori/:slug", mainControllers.getCategories);

module.exports = router