import getDashboardController from "../../controllers/dashboardResumen/getDashboardController.js";
import getOneDashboardController from "../../controllers/dashboardResumen/getOneDashboardController.js";

import { Router } from "express";

const router = Router();

/*****************/
/*******GET*******/
/*****************/
router.get("/", getDashboardController.getDashboard);
router.get("/:id", getOneDashboardController.getOneDashboard);

/***************/
/*****POST******/
/***************/
// router.post("/", CreateOneCleaningController.createOneCleaning);

/***************/
/*****PUT*******/
/***************/
// router.put("/:id", UpdateOneCleaningController.updateOneCleaning);

/***************/
/****DELETE*****/
/***************/
// router.delete("/:id", DeleteOneCleaningController.deleteOneCleaning);


export default router;