import pool from '../../middleware/connection.js'

const getAllProjectsDetailModels = {
    async allProjectsDetail() {
        try {
            const query = 'SELECT * FROM vista_proyectos_detallada';
            const result = await pool.query(query);
            return result.rows || null; 
        } catch (error) {
            throw new Error('Database query failed: ' + error.message);
        }
    }
}

export default getAllProjectsDetailModels;