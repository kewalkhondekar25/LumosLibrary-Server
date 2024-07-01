import { Router } from "express";
import { addToCart } from "../controller/cart.controller.js";
import verifyJWT from "../middleware/user.middleware.js";

const router = Router();

router.route("/cart/:id").post(verifyJWT, addToCart);

export default router;