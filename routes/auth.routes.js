import {Router} from "express";
import { signUp } from "../controllers/auth.controllers.js";

const authRouter = Router();


authRouter.post("/sign-up",signUp);

authRouter.post("/sign-in", (req,res) => {
	res.send("Sign In Route");
});

authRouter.post("/sign-out", (req,res) => {
	res.send("Sign Out Route");
});


export default authRouter;