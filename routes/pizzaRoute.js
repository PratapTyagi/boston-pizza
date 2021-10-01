import express from "express";
const router = express.Router();

import { getPizzas } from "../controllers/pizza/getPizzas.js";
import { postPizza } from "../controllers/pizza/postPizza.js";
import { getPizzaById } from "../controllers/pizza/getPizzaById.js";
import { editPizza } from "../controllers/pizza/editPizza.js";
import { deletePizza } from "../controllers/pizza/deletePizza.js";
import { filterPizza } from "../controllers/pizza/getPizzas.js";

router.get("/getpizzas", getPizzas);
router.post("/addpizzas", postPizza);
router.post("/pizzabyid", getPizzaById);
router.post("/editpizza", editPizza);
router.post("/deletepizza", deletePizza);
router.post("/filter-pizza", filterPizza);

export default router;
