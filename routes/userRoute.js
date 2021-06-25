import express from "express";
const router = express.Router();

import { postUser, postLogin } from "../controllers/user/postUser.js";
import { getAllUsers } from "../controllers/user/getAllUsers.js";
import { deleteUser } from "../controllers/user/deleteUser.js";
import { resetPassword } from "../controllers/user/resetPassword.js";
import { newPassword } from "../controllers/user/newPassword.js";

router.post("/register", postUser);
router.post("/login", postLogin);
router.get("/getallusers", getAllUsers);
router.post("/deleteuser", deleteUser);
router.post("/reset-password", resetPassword);
router.post("/new-password", newPassword);

export default router;
