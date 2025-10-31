const getAllProjectDetailDetailModels = {
    async allProjectsDetailDetail() {
        try {
            const query = 'SELECT * FROM vista_proyectos_detallada_detalle';
            const result = await pool.query(query);
            return result.rows || null; 
        } catch (error) {
            throw new Error('Database query failed: ' + error.message);
        }
    }
}

export default getAllProjectDetailDetailModels;