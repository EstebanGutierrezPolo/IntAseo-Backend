import pool from "../../middleware/connection.js";

const getOneProjectDetailModels = {
    async getOneProjectDetail(id_proyecto){
        try {
            console.log(id_proyecto)
            const query = 'SELECT * FROM vista_proyectos_detallada WHERE id_proyecto = $1';
            const result = await pool.query(query, [id_proyecto]);
            return result.rows[0] || null;
                       
        } catch (error) {
            console.error('GetUser Error:', error);
            throw new Error('Database query failed: ' + error.message);
        }
    }
}

export default getOneProjectDetailModels;