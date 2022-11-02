import express from "express";
import bcrypt from "bcrypt";
import UserController from "../controller/user.controller";
import { authenticateToken } from "../middleware/token.middleware";

const router = express.Router();

router.get("/", async (req, res) => {
  return res.status(200).json({ data: "Server working !" });
});

export default router;
