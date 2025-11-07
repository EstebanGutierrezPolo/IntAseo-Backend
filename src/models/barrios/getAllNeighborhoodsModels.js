import pool from '../../middleware/connection.js'

const getAllNeighborhoodsModels = {
    async allNeighborhoods() {
        try {
            const query = 'select * from barrios;';
            const result = await pool.query(query);
            return result.rows || null; 
        } catch (error) {
            throw new Error('Database query failed: ' + error.message);
        }
    }
}

export default getAllNeighborhoodsModels;