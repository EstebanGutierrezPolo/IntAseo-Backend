import getAllSectorsController from "../../controllers/sectors/getAllSectorsController.js";
// import getOneSectorController from "../../controllers/sectors/getOneSectorController.js";

import { Router } from "express";

const router = Router();

/*****************/
/*******GET*******/
/*****************/
router.get("/", getAllSectorsController.getAllSectors);

// router.get("/:id", getOneSectorController.getSector);

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