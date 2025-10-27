import getDashboardModels from "../../models/dashboardResumen/getDashboardModels.js"

const getDashboardController = {
    async getDashboard(req, res) {
        try {
            const projects = await getDashboardModels.getDashboardFunction();
            res.status(200).json({ 
                success: true,
                msg: "Projects retrieved successfully", 
                projects
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

export default getDashboardController;