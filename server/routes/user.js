import express from "express"
import { changePassword, getMyProfile, login, logout, signup, updateProfile } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/login",login)
router.post("/signup",signup)
router.get("/profile",isAuthenticated,getMyProfile)
router.get("/logout",isAuthenticated,logout)

//updating routes
router.put("/updateprofile",isAuthenticated,updateProfile)
router.put("/changepassword",isAuthenticated,changePassword)

export default router; 