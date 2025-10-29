import pool from "../../middleware/connection.js";

const getOneDashboardModel = {
    async getOneDashboard(id_proyecto){
        try {
            console.log(id_proyecto)
            const query = 'SELECT * FROM vista_resumen_programas WHERE id_programa = $1';
            const result = await pool.query(query, [id_proyecto]);
            return result.rows[0] || null;
                       
        } catch (error) {
            console.error('GetUser Error:', error);
            throw new Error('Database query failed: ' + error.message);
        }
    }
}

export default getOneDashboardModel;