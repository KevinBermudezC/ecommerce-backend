import {Router} from "express";
import {createProduct} from "../controllers/products.controller.js";
import categoryAndProductsMiddleware from "../middlewares/categoryAndProducts.middleware.js";

const productsRouter = Router();


productsRouter.get("/", (req,res) => {
	res.send("GET All Products ");
});

productsRouter.get("/:id", (req,res) => {
	res.send("GET Single Product");
});

productsRouter.post("/create-product",categoryAndProductsMiddleware, createProduct);

productsRouter.put("/:id", (req,res) => {
	res.send("Update Product");
});

productsRouter.delete("/:id", (req,res) => {
	res.send("Delete Product");
});

export default productsRouter;