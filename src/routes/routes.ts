import { Router } from "express";
import { testController } from "../controllers/test.controller.js";
import {
  addUserController,
  loginController,
} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { addTaskController } from "../controllers/tasks.controller.js";

const router = Router();

router.post("/auth/register", addUserController);
router.post("/auth/login", loginController);
router.get("/test", authMiddleware, testController);
router.post("/task", addTaskController);

export default router;
