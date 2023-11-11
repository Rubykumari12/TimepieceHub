import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { brainTreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController,
     getSingleProductController, productCategoryController, productCountController, productFiltersController, 
     productListController, productPhotoController, relatedProductController, searchProductController, 
     updateProductController } from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
//Create Products
router.post("/create-product", requireSignIn, isAdmin, formidable(), createProductController);

//get products
router.get("/get-product", getProductController);

//Single Product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//Delete Product
router.delete("/delete-product/:pid", deleteProductController);

//Update Products
router.put("/update-product/:pid", requireSignIn, isAdmin, formidable(), updateProductController);

//Filter Product
router.post("/product-filters", productFiltersController);

//Product Count
router.get("/product-count", productCountController);

//Product Per Page
router.get("/product-list/:page", productListController);

//Search Product
router.get("/search/:keyword", searchProductController);

//Similar Products
router.get("/related-product/:pid/:cid", relatedProductController);

//Category Wise Product
router.get("/product-category/:slug", productCategoryController);

//Payment Routes
//Token
router.get("/braintree/token", braintreeTokenController);

//Payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;