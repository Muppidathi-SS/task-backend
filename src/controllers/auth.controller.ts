import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { addUser } from "../services/auth.service";

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
    console.error("API error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
