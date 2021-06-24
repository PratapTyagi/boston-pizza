import express from "express";
const router = express.Router();

import { postUser, postLogin } from "../controllers/postUser.js";
import { getAllUsers } from "../controllers/getAllUsers.js";
import { deleteUser } from "../controllers/deleteUser.js";
import { resetPassword } from "../controllers/resetPassword.js";

router.post("/register", postUser);
router.post("/login", postLogin);
router.get("/getallusers", getAllUsers);
router.post("/deleteuser", deleteUser);
router.post("/reset-password", resetPassword);

export default router;
