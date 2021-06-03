import express from "express";
const router = express.Router();

import { postOrder } from "../controllers/postOrder.js";
import { getOrders } from "../controllers/getOrders.js";
import { getAllOrders } from "../controllers/getAllOrders.js";
import { deliverOrder } from "../controllers/deliverOrder.js";

router.post("/placeorder", postOrder);
router.post("/getuserorders", getOrders);
router.get("/getallorders", getAllOrders);
router.post("/deliverorder", deliverOrder);

export default router;
