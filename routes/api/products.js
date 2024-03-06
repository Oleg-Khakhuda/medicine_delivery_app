import { Router } from "express";
import {getAllProducts} from "../../controllers/products/index.js";

const router = new Router();

router.get("/", getAllProducts);

export default router;