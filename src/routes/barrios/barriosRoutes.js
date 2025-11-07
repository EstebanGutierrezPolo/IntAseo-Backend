import getAllNeighborhoodsController from "../../controllers/barrios/getAllNeighborhoodsController.js";


import { Router } from "express";

const router = Router();

/*****************/
/*******GET*******/
/*****************/
router.get("/", getAllNeighborhoodsController.getAllNeighborhoods);
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