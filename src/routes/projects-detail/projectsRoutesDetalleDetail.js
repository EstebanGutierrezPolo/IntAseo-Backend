import getAllProjectsDetailDetalleController from "../../controllers/projects-detail/getAllProjectsDetailDetalleController.js";
import GetOneProjectDetailController from "../../controllers/projects-detail/getOneProjectDetailDetalleModels.js";

import { Router } from "express";

const router = Router();

/*****************/
/*******GET*******/
/*****************/
router.get("/", getAllProjectsDetailDetalleController.getAllProjectsDetailDetalle);

// router.get("/:id", GetOneProjectDetailController.getOneProjectDetail);
// router.get("/:id", GetOneCleaningController.getOneCleaning);

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