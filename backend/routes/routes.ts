import express from "express";
import { home, loginUser, createdUser, updateUser, deleteUser } from "../controlers/userControlers";
import { getAllOffres, offreById, addOffre } from "../controlers/offreControlers";

const router = express.Router();

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

export default router; 