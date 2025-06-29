const { Client } = require("pg");
require("dotenv").config();

const dbClient = new Client({
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  ssl: {
    rejectUnauthorized: false, // Supabase exige SSL
  },
});

dbClient.connect()
  .then(() => console.log("✅ Connected to Supabase"))
  .catch(err => console.error("❌ DB connection failed", err));

module.exports = dbClient;
