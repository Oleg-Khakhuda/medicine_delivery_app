import { Router } from "express";
import {getAllProducts, getProductsByShop} from "../../controllers/products/index.js";

const router = new Router();

router.get("/", getAllProducts);
router.get("/:id", getProductsByShop);

export default router;