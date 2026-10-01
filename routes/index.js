import express from "express";
import { homePage } from "../controllers/homeController.js";
import productController from "../controllers/productController.js";
import categoryController from "../controllers/categoryController.js";
import customerController from "../controllers/customerController.js";
import supplierController from "../controllers/supplierController.js";
import orderController from "../controllers/orderController.js";

const router = express.Router();

// Home
router.get("/", homePage);

// Activity: 10 routes (2 routes per model)
router.get("/products", productController.index);
router.post("/products", productController.create);

router.get("/categories", categoryController.index);
router.post("/categories", categoryController.create);

router.get("/customers", customerController.index);
router.post("/customers", customerController.create);

router.get("/suppliers", supplierController.index);
router.post("/suppliers", supplierController.create);

router.get("/orders", orderController.index);
router.post("/orders", orderController.create);

export default router;
