import pg from 'pg';
import dotenv from 'dotenv/config.js';
 
//Principal função de um pool é fazer escalonamento de sistema
const { Pool } = pg;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbPassword = process.env.DB_PASSWORD;

const pool = new Pool({
    user: dbUser,
    host: dbHost,
    database: dbName,
    password: dbPassword,
    port: 5432
});
export default pool;