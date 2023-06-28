import express from "express"
import { isAuthenticated } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";
import { addProductImage, createProduct, deleteProduct, deleteProductImage, getAllProducts, getProductDetails, updateProduct } from "../controllers/product.js";

const router = express.Router();

router.get("/all",getAllProducts)
router.route("/single/:id").get(getProductDetails).put(isAuthenticated,updateProduct).delete(isAuthenticated,deleteProduct)
router.post("/new",isAuthenticated,singleUpload,createProduct)

router.route("/images/:id").post(isAuthenticated,singleUpload,addProductImage).delete(isAuthenticated,deleteProductImage)
export default router; 