import pool from '../../middleware/connection.js'

const getAllProjectsModels = {
    async allProjects() {
        try {
            const query = 'SELECT * FROM proyectos';
            const result = await pool.query(query);
            return result.rows || null; 
        } catch (error) {
            throw new Error('Database query failed: ' + error.message);
        }
    }
}

export default getAllProjectsModels;