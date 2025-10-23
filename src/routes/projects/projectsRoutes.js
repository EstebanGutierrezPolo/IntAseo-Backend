import getAllProjectsController from "../../controllers/projects/getAllProjectsController.js";


import { Router } from "express";

const router = Router();

/*****************/
/*******GET*******/
/*****************/
router.get("/", getAllProjectsController.getAllProjects);
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