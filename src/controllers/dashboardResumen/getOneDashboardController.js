import getOneDashboardModel from "../../models/dashboardResumen/getOneDashboardModel.js"

const getOneDashboardController = {
    async getOneDashboard (req, res){
        try {
            const id_proyecto = req.params.id;
            const dashboard = await getOneDashboardModel.getOneDashboard(id_proyecto);
            res.status(200).json({  
                success: true,
                msg: "One Dashboard retrieved successfully", 
                dashboard
            });
        } catch (error) {
            console.error('GetOneDashboard Error:', error);
            res.status(500).json({
                success: false,
                error: true, 
                msg: "Internal server error, try later" 
            });
        }
    }
}

export default getOneDashboardController;