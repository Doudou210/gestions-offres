const express = require("express");
const router = express.Router();
const { home } = require("../controlers/userControlers");
const { getAllOffres, offreById } = require("../controlers/offreController");

router.get('/', home);
router.get('/offres', getAllOffres);
router.get('/offres/:id', offreById);
router.post('/offres/add-offres', )

module.exports = router