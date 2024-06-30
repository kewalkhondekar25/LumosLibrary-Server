import {Router} from "express"
import { getAllBooks, uploadBooks } from "../controller/book.controller.js";

const router = Router();

router.route("/books").get(getAllBooks);
router.route("/books").post(uploadBooks)

export default router;