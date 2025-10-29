import pool from '../../middleware/connection.js'

const getDashboardModels = {
    async getDashboardFunction() {
        try {
            const query = 'SELECT * FROM vista_resumen_proyectos';
            const result = await pool.query(query);
            return result.rows || null; 
        } catch (error) {
            throw new Error('Database query failed: ' + error.message);
        }
    }
}

export default getDashboardModels;