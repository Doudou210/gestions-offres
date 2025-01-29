const express = require("express");
const router = express.Router();
const { home, loginUser } = require("../controlers/userControlers");
const { createdUser } = require("../controlers/userControlers");
const { getAllOffres, offreById, addOffre } = require("../controlers/offreControlers");


//Offres Router
router.get('/', home);
router.get('/offres', getAllOffres);
router.get('/offres/:id_offres', offreById);
router.post('/offres/add-offres', addOffre);

//Users Router
router.post("/creat_user", createdUser)
router.post("/login", loginUser)

module.exports = router