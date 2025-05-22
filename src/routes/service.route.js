import express from "express";
import serviceController from "../controller/service.controller.js"



const router = express.Router();



router.get("/getallservice",serviceController.getAllService)
router.post("/createservice",serviceController.createService)
router.put("/editservice/:id",serviceController.EditService)
router.delete("/deleteservice/:id",serviceController.deleteService)







export default router