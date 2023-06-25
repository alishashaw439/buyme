import express from "express"
import { changePassword, getMyProfile, login, logout, signup, updatePic, updateProfile } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/login",login)
router.post("/signup",singleUpload,signup)
router.get("/profile",isAuthenticated,getMyProfile)
router.get("/logout",isAuthenticated,logout)

//updating routes
router.put("/updateprofile",isAuthenticated,updateProfile)
router.put("/changepassword",isAuthenticated,changePassword)
router.put("/updatepic",isAuthenticated,singleUpload,updatePic)
export default router; 