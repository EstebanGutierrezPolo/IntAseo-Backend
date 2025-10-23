import pg from 'pg';
import {config} from 'dotenv';

config();

const {HOST, DATABASE, PASSWORD, USER, PORT} = process.env

export const pool = new pg.Pool({
    host:HOST,
    database:DATABASE,
    password:PASSWORD,
    user:USER,
    port:PORT
});

const testConnection = async () => {
    try {
        const client = await pool.connect();
        console.log("✅ Database connection successful!");
        client.release();
    } catch (error) {
        console.error("❌ Database connection error:", error);
    }
};

testConnection();

export default pool;


