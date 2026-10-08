import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { addUser, loginUser } from "../services/auth.service";
import { handleError } from "../utils/error/error-handler";

export const addUserController = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const result = await addUser({ name, email, password: hashedPassword });
    return res.status(200).json({
      success: true,
      message: "User Craeted Successfully",
      data: result,
    });
  } catch (error) {
    return handleError(error, res);
  }
};

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const result = await loginUser(email, password);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: result,
    });
  } catch (error) {
    return handleError(error, res);
  }
};
