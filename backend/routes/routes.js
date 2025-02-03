const express = require("express");
const router = express.Router();
const { home, loginUser, createdUser, updateUser, deleteUser } = require("../controlers/userControlers");
const { getAllOffres, offreById, addOffre } = require("../controlers/offreControlers");


//Offres Router
router.get('/', home);
router.get('/offres', getAllOffres);
router.get('/offres/:id_offres', offreById);
router.post('/offres/add-offres', addOffre);

//Users Router
router.post("/create_user", createdUser);
router.post("/login", loginUser);
router.put("/update_user/:id", updateUser);
router.delete("/delete_user/:id", deleteUser);


module.exports = router