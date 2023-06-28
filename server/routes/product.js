import express from "express"
import { isAuthenticated } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";
import { getAllProducts, getProductDetails } from "../controllers/product.js";

const router = express.Router();

router.get("/all",getAllProducts)
router.route("/single/:id").get(getProductDetails)
export default router; 