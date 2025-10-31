import getAllProjectDetailDetailModels from "../../models/projects-detail/getAllProjectDetailModels.js"

const getAllProjectsDetailController = {
    async getAllProjectsDetail(req, res) {
        try {
            const projectsDetail = await getAllProjectDetailDetailModels.allProjectsDetailDetail();
            res.status(200).json({ 
                success: true,
                msg: "Projects retrieved successfully", 
                projectsDetail
            });
        } catch (error) {
            console.error('GetAllProjects Error:', error);
            res.status(500).json({ 
                success: false,
                error: true, 
                msg: "Internal server error, try later" 
            });
        }
    }
}

export default getAllProjectsDetailController;