import {Router} from "express"
import { getAllBooks } from "../controller/book.controller.js";

const router = Router();

router.route("/books").get(getAllBooks);

export default router;