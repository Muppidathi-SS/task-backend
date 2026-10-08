import type { Response } from "express";

export const handleError = (error: any, res: Response) => {
  console.error("API Error:", error);

  if (error instanceof Error && error.message === "INVALID_CREDENTIALS") {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  if (error?.code === "23505") {
    return res.status(409).json({
      success: false,
      message: "Already Exists",
      detail: error.detail,
    });
  }

  if (error?.code === "23503") {
    return res.status(400).json({
      success: false,
      message: "Referenced data does not exist",
      detail: error.detail,
    });
  }

  if (error?.code === "23502") {
    return res.status(400).json({
      success: false,
      message: "Required field is missing",
      detail: error.detail,
    });
  }

  return res.status(500).json({
    success: false,
    message: "Internal server error",
  });
};
