import express from "express";
import cookieParser from 'cookie-parser';

import { PORT } from './config/env.js';

import authRouter from "./routes/auth.routes.js";
import productsRouter from "./routes/products.routes.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(errorMiddleware);

app.use("/auth", authRouter);
app.use("/products", productsRouter);


app.get("/", (req,res) => {
	res.send("Welcome to Ecommerce Backend API");
});

app.listen(PORT, () => {
	console.log(`Ecommerce Backend API is running on http://localhost:${PORT}`);
})

export default app;