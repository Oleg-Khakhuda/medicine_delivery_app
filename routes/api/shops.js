import { Router } from "express";
import {getAllShops} from "../../controllers/shops/index.js"

const router = new Router();

router.get("/", getAllShops);

export default router;