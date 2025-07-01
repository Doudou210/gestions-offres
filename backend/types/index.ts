import { Request, Response } from 'express';

// User interfaces
export interface User {
  id: number;
  username: string;
  nom: string;
  prenom: string;
  email: string;
  sexe: string;
  password: string;
  created_at?: Date;
}

export interface CreateUserRequest {
  username: string;
  nom: string;
  prenom: string;
  email: string;
  sexe: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface UpdateUserRequest {
  username: string;
}

// Offre interfaces
export interface Offre {
  id_offres: number;
  title: string;
  description: string;
  entreprise: string;
  lieu: string;
  created_at?: Date;
}

export interface CreateOffreRequest {
  title: string;
  description: string;
  entreprise: string;
  lieu: string;
}

// Database result interfaces
export interface QueryResult<T> {
  rows: T[];
  rowCount: number;
}

// Response interfaces
export interface ApiResponse<T = any> {
  message?: string;
  error?: string;
  data?: T;
  user?: T;
}

// Database client interface
export interface DatabaseClient {
  query: (text: string, params?: any[]) => Promise<QueryResult<any>>;
  connect: () => Promise<void>;
} 