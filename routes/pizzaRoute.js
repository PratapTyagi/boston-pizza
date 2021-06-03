import express from "express";
const router = express.Router();

import { getPizzas } from "../controllers/getPizzas.js";
import { postPizza } from "../controllers/postPizza.js";
import { getPizzaById } from "../controllers/getPizzaById.js";
import { editPizza } from "../controllers/editPizza.js";
import { deletePizza } from "../controllers/deletePizza.js";

router.get("/getpizzas", getPizzas);
router.post("/addpizzas", postPizza);
router.post("/pizzabyid", getPizzaById);
router.post("/editpizza", editPizza);
router.post("/deletepizza", deletePizza);

export default router;
