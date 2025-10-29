import  getAllSectorsModel from "../../models/sectors/getAllSectorsModel.js"

const getAllSectorsController = {
    async getAllSectors(req, res) {
        try {
            const sectores = await getAllSectorsModel.getSectors();
            res.status(200).json({ 
                success: true,
                msg: "Sectors retrieved successfully", 
                sectores
            });
        } catch (error) {
            console.error('GetAllSectors Error:', error);
            res.status(500).json({ 
                success: false,
                error: true, 
                msg: "Internal server error, try later" 
            });
        }
    }
}

export default getAllSectorsController;