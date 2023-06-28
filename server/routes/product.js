import express from "express"
import { isAuthenticated } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";
import { createProduct, getAllProducts, getProductDetails } from "../controllers/product.js";

const router = express.Router();

router.get("/all",getAllProducts)
router.route("/single/:id").get(getProductDetails)
router.post("/new",isAuthenticated,singleUpload,createProduct)
export default router; 