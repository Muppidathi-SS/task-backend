import type { Request, Response } from "express";
import { testService } from "../services/test.service.js";

export const testController = async (req: Request, res: Response) => {
  try {
    const result = await testService();
    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Test API error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
