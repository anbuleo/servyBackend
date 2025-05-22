import express from "express";
import authRoute from "./auth.route.js";
import userRoute from './user.route.js'
import serviceRoute from "./service.route.js"


const router = express.Router();

router.use('/auth', authRoute)
router.use('/user',userRoute)
router.use('/service',serviceRoute)

export default router