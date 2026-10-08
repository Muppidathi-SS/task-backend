import { Router } from "express";
import { testController } from "../controllers/test.controller.js";
import {
  addUserController,
  loginController,
} from "../controllers/auth.controller.js";

const router = Router();

router.get("/test", testController);
/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Muppidathi
 *               email:
 *                 type: string
 *                 example: aadhi@gmail.com
 *               password:
 *                 type: string
 *                 example: Password@123
 *     responses:
 *       201:
 *         description: User registered successfully
 *       409:
 *         description: Email already exists
 *       500:
 *         description: Internal server error
 */
router.post("/auth/register", addUserController);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: aadhi@gmail.com
 *               password:
 *                 type: string
 *                 example: Password@123
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid email or password
 *       500:
 *         description: Internal server error
 */
router.post("/auth/login", loginController);

export default router;
