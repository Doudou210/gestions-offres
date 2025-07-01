import { Client } from "pg";
import dotenv from "dotenv";
import { DatabaseClient } from "./types";

dotenv.config();

// Configuration par défaut pour les tests si les variables d'environnement ne sont pas définies
const dbConfig = {
  host: process.env.PG_HOST || 'localhost',
  port: Number(process.env.PG_PORT) || 5432,
  database: process.env.PG_DATABASE || 'postgres',
  user: process.env.PG_USER || 'postgres',
  password: process.env.PG_PASSWORD || 'password',
  ssl: process.env.PG_HOST?.includes('supabase') ? {
    rejectUnauthorized: false,
  } : false,
};

const dbClient: DatabaseClient = new Client(dbConfig);

// Fonction de connexion avec retry
const connectWithRetry = async (retries = 3, delay = 2000) => {
  for (let i = 0; i < retries; i++) {
    try {
      await dbClient.connect();
      console.log("✅ Connected to database");
      return;
    } catch (err: any) {
      console.error(`❌ DB connection attempt ${i + 1} failed:`, err.message);
      if (i < retries - 1) {
        console.log(`Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      } else {
        console.error("❌ All DB connection attempts failed");
        // En mode développement, on peut continuer sans DB
        if (process.env.NODE_ENV !== 'production') {
          console.log("⚠️  Continuing without database connection (development mode)");
        }
      }
    }
  }
};

connectWithRetry();

export default dbClient; 