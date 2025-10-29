import pool from '../../middleware/connection.js'

const getAllSectorsModel = {
    async getSectors() {
        try {
            const query = 'SELECT * FROM vw_resumen_sectores';
            const result = await pool.query(query);
            return result.rows || null; 
        } catch (error) {
            throw new Error('Database query failed: ' + error.message);
        }
    }
}

export default getAllSectorsModel;