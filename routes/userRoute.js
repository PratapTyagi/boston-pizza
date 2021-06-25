import express from "express";
const router = express.Router();

import { postUser, postLogin } from "../controllers/postUser.js";
import { getAllUsers } from "../controllers/getAllUsers.js";
import { deleteUser } from "../controllers/deleteUser.js";
import { resetPassword } from "../controllers/resetPassword.js";
import { newPassword } from "../controllers/newPassword.js";

router.post("/register", postUser);
router.post("/login", postLogin);
router.get("/getallusers", getAllUsers);
router.post("/deleteuser", deleteUser);
router.post("/reset-password", resetPassword);
router.post("/new-password", newPassword);

export default router;
