import { Router } from "express";
import { testController } from "../controllers/test.controller.js";
import { addUserController } from "../controllers/auth.controller.js";

const router = Router();

router.get("/test", testController);
router.post("/add-user", addUserController);

export default router;
