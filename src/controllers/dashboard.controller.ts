import { Request, Response } from "express";
import { dashboardRecords } from "../services/dashboard.service";
import { handleError } from "../utils/error/error-handler";

export const dashboardController = async (req: Request, res: Response) => {
  try {
    const user_id = req.user!.userId;
    const result = await dashboardRecords(user_id);
    return res.status(200).json({
      success: true,
      message: "Dashboard Fetched successfully",
      data: result,
    });
  } catch (error) {
    return handleError(error, res);
  }
};
