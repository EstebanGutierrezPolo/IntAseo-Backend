import getOneProjectDetailModels from "../../models/projects-detail/getOneProjectDetailModels.js";

const GetOneProjectDetailController = {
    async getOneProjectDetail (req, res){
        try {
            const id_proyecto = req.params.id;
            const project = await getOneProjectDetailModels.getOneProjectDetail(id_proyecto);
            res.status(200).json({  
                success: true,
                msg: "Project retrieved successfully", 
                project
            });
        } catch (error) {
            console.error('GetOneProjectDetail Error:', error);
            res.status(500).json({ 
                success: false,
                error: true, 
                msg: "Internal server error, try later" 
            });
        }
    }
}

export default GetOneProjectDetailController;