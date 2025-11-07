import getAllNeighborhoodsModels from "../../models/barrios/getAllNeighborhoodsModels.js"

const getAllNeighborhoodsController = {
    async getAllNeighborhoods(req, res) {
        try {
            const neighborhoods = await getAllNeighborhoodsModels.allNeighborhoods();
            res.status(200).json({ 
                success: true,
                msg: "Neighborhoods retrieved successfully", 
                neighborhoods
            });
        } catch (error) {
            console.error('GetAllNeighborhoods Error:', error);
            res.status(500).json({ 
                success: false,
                error: true, 
                msg: "Internal server error, try later" 
            });
        }
    }
}

export default getAllNeighborhoodsController;