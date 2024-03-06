import { Router } from "express";
import {addOrder} from "../../controllers/orders/index.js";

const router = new Router();

router.post("/", addOrder);

export default router;