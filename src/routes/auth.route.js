import express from "express";
import authController from "../controller/auth.controller.js";

const router = express.Router();
router.post("/send-otp", authController.sendOTP);
router.post("/verify-otp", authController.verifyOTP);
router.post("/signup", authController.signUp);
router.post("/signin", authController.signIn);
router.post("/forget", authController.forgotPasswordLink);
router.post("/reset/:token", authController.resetPasswordWithToken);

export default router;
