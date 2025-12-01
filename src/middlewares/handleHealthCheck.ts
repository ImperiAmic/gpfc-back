import { Request, Response } from "express";
import statusCodes from "../globals/statusCode.js";

const handleHealthCheck = (_req: Request, res: Response): void => {
  res.status(statusCodes.OK).json({ message: "🏓" });
};

export default handleHealthCheck;
