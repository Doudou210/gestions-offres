import bcrypt from "bcrypt";
import { Request, Response } from "express";
import dbClient from "../db";
import { 
  CreateUserRequest, 
  LoginRequest, 
  UpdateUserRequest, 
  User, 
  ApiResponse 
} from "../types";

const home = async (req: Request, res: Response): Promise<void> => {
  res.send('Welcome to my server!');
};

const createdUser = async (req: Request, res: Response): Promise<void> => {
  const { username, nom, prenom, email, sexe, password }: CreateUserRequest = req.body;

  if (!username || !nom || !prenom || !email || !sexe || !password) {
    res.status(400).json({ error: "Tous les champs sont obligatoires" });
    return;
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const insertDataUsers = `INSERT INTO users(username,nom, prenom, email,sexe,password) VALUES($1,$2,$3,$4,$5,$6) RETURNING*`;
    
    const result = await dbClient.query(insertDataUsers, [username, nom, prenom, email, sexe, hashedPassword]);
    res.json(result.rows[0]);
  } catch (error: any) {
    console.error('Database error:', error.message);
    if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
      res.status(503).json({ error: "Service de base de données indisponible" });
    } else {
      res.status(500).json({ error: "Erreur lors de la création de l'utilisateur" });
    }
  }
};

const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password }: LoginRequest = req.body;
  
  try {
    const queryUser = `SELECT * FROM users WHERE email = $1`;
    const result = await dbClient.query(queryUser, [email]);

    if (result.rows.length === 0) {
      res.status(400).json({ error: "User not found, create an account" });
      return;
    }
    
    const user: User = result.rows[0];
    const passCheck = await bcrypt.compare(password, user.password);
    
    if (passCheck) {
      res.status(200).json({ message: "Connexion réussie!" });
    } else {
      res.status(200).json({ error: "Email or password is invalid, try again" });
    }
  } catch (error: any) {
    console.error('Database error:', error.message);
    if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
      res.status(503).json({ error: "Service de base de données indisponible" });
    } else {
      res.status(500).json({ error: "Erreur lors de la connexion" });
    }
  }
};

const updateUser = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id);
  const { username }: UpdateUserRequest = req.body;

  try {
    const setUpdate = `UPDATE users SET username=$1 WHERE id=$2 RETURNING*`;
    const result = await dbClient.query(setUpdate, [username, id]);
    
    if (result.rows.length === 0) {
      res.status(400).json({ error: "User not found, create an account" });
      return;
    }
    
    res.status(200).json({ message: "Updated successfull", user: result.rows[0] });
  } catch (error: any) {
    console.error('Database error:', error.message);
    if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
      res.status(503).json({ error: "Service de base de données indisponible" });
    } else {
      res.status(500).json({ error: "Erreur lors de la mise à jour" });
    }
  }
};

const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id);
  
  try {
    const setDelete = `DELETE FROM users WHERE id=$1 RETURNING*`;
    const result = await dbClient.query(setDelete, [id]);
    
    if (result.rowCount === 0) {
      res.status(400).json({ error: "User not found, Sign In create an account" });
      return;
    }
    
    res.status(200).json({ message: "Deleted successfull", user: result.rows[0] });
  } catch (error: any) {
    console.error('Database error:', error.message);
    if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
      res.status(503).json({ error: "Service de base de données indisponible" });
    } else {
      res.status(500).json({ error: "Erreur lors de la suppression" });
    }
  }
};

export {
  home,
  createdUser,
  loginUser,
  updateUser,
  deleteUser
}; 