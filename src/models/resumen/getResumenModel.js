import pool from '../../middleware/connection.js'

const getResumenModel = {
    async getResumen() {
        try {
            const query = 'SELECT * FROM vista_resumen_dashboard';
            const result = await pool.query(query);
            return result.rows || null; 
        } catch (error) {
            throw new Error('Database query failed: ' + error.message);
        }
    }
}

export default getResumenModel;