import {Router} from "express";

const productsRouter = Router();


productsRouter.get("/", (req,res) => {
	res.send("GET All Products ");
});

productsRouter.get("/:id", (req,res) => {
	res.send("GET Single Product");
});

productsRouter.post("/", (req,res) => {
	res.send("Create Product");
});

productsRouter.put("/:id", (req,res) => {
	res.send("Update Product");
});

productsRouter.delete("/:id", (req,res) => {
	res.send("Delete Product");
});

export default productsRouter;