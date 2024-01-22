// routes go here
const express = require("express");
const { getData, fetchData } = require("../../controllers/data-controller");

const router = express.Router();


// returns all the entries in the database
router.get("/get", getData);

// add top 10 entries to the database
router.get("/fetch", fetchData);

module.exports = router;