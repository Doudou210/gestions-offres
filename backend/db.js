const { Client } = require("pg");
require("dotenv").config();

const dbClient = new Client({
    host: process.env.PG_HOST,
    port:process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
})

dbClient.connect()
.then(()=>console.log("DB is connected"))
.catch(()=> console.error("Connexion is failled"));

module.exports = dbClient;