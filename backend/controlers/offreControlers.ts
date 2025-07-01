import { Request, Response } from "express";
import dbClient from "../db";
import offreData from "../OffreLists.json";
import { 
  Offre, 
  CreateOffreRequest
} from "../types";

const getAllOffres = async (req: Request, res: Response): Promise<void> => {
  try {
    const request = `SELECT * from offres`;
    const result = await dbClient.query(request);
    res.status(200).json(result.rows);
  } catch (error: any) {
    console.error('Database error:', error.message);
    if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
      res.status(503).json({ error: "Service de base de données indisponible" });
    } else {
      res.status(500).json({ error: "Erreur lors de la récupération des offres" });
    }
  }
};

const addOffre = async (req: Request, res: Response): Promise<void> => {
  const { title, description, entreprise, lieu }: CreateOffreRequest = req.body;
  
  if (!title || !description || !entreprise || !lieu) {
    res.status(400).json({ error: "Tous les champs sont obligatoires" });
    return;
  }
  
  try {
    //Request for insert data in database
    const insertData = `INSERT INTO offres(title, description, entreprise,lieu) VALUES ($1,$2,$3,$4) RETURNING *`;
    const result = await dbClient.query(insertData, [title, description, entreprise, lieu]);
    
    console.log("Successfully");
    res.status(201).json({ 
      message: 'Offre is added successfully',
      offre: result.rows[0]
    });
  } catch (error: any) {
    console.error("Error inserting data:", error.message);
    if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
      res.status(503).json({ error: "Service de base de données indisponible" });
    } else {
      res.status(500).json({ error: 'Failed to add offre' });
    }
  }
};

const offreById = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id_offres);

  try {
    const getIdRequest = `SELECT * from offres WHERE id_offres=$1`;
    const result = await dbClient.query(getIdRequest, [id]);
    
    if (result.rows.length === 0) {
      res.status(404).json({ error: "Offre non trouvée" });
      return;
    }
    
    res.status(200).json(result.rows[0]);
  } catch (error: any) {
    console.error('Database error:', error.message);
    if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
      res.status(503).json({ error: "Service de base de données indisponible" });
    } else {
      res.status(500).json({ error: "Erreur lors de la récupération de l'offre" });
    }
  }
};

export {
  getAllOffres,
  offreById,
  addOffre
}; 