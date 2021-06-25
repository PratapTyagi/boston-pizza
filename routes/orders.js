import express from "express";
const router = express.Router();

import { postOrder } from "../controllers/orders/postOrder.js";
import { getOrders } from "../controllers/orders/getOrders.js";
import { getAllOrders } from "../controllers/orders/getAllOrders.js";
import { deliverOrder } from "../controllers/orders/deliverOrder.js";

router.post("/placeorder", postOrder);
router.post("/getuserorders", getOrders);
router.get("/getallorders", getAllOrders);
router.post("/deliverorder", deliverOrder);

export default router;
