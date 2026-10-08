import { Router } from "express";
import { testController } from "../controllers/test.controller.js";
import { addUserController, loginController } from "../controllers/auth.controller.js";

const router = Router();

router.get("/test", testController);
router.post("/auth/register", addUserController);
router.post("/auth/login", loginController);

export default router;
