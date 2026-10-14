import { Router } from "express";
import { testController } from "../controllers/test.controller.js";
import {
  addUserController,
  loginController,
} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import {
  addTaskController,
  deleteTaskController,
  getTaskByIdController,
  getTaskController,
  updateTaskController,
} from "../controllers/tasks.controller.js";
import { dashboardController } from "../controllers/dashboard.controller.js";

const router = Router();

router.post("/auth/register", addUserController);
router.post("/auth/login", loginController);
router.get("/test", authMiddleware, testController);
router.post("/tasks/task", authMiddleware, addTaskController);
router.put("/tasks/:task_id", authMiddleware, updateTaskController);
router.get("/tasks", authMiddleware, getTaskController);
router.delete("/tasks/:task_id", authMiddleware, deleteTaskController);
router.get("/tasks/dashboard",authMiddleware, dashboardController)
router.get("/tasks/:task_id",authMiddleware, getTaskByIdController)

export default router;
