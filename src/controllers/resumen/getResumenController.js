import  getResumenModel from "../../models/resumen/getResumenModel.js"

const getResumenController = {
    async getResumen(req, res) {
        try {
            const resumen = await getResumenModel.getResumen();
            res.status(200).json({ 
                success: true,
                msg: "Resumen retrieved successfully", 
                resumen
            });
        } catch (error) {
            console.error('GetResumen Error:', error);
            res.status(500).json({ 
                success: false,
                error: true, 
                msg: "Internal server error, try later" 
            });
        }
    }
}

export default getResumenController;