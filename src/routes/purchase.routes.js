import { Router } from "express";
import { createPurchase, getPurchase } from "../controller/purchase.controller.js";
import verifyJWT from "../middleware/user.middleware.js";

const router = Router();

router.route("/purchase").post(verifyJWT,createPurchase);
router.route("/purchase").get(verifyJWT,getPurchase)

export default router;