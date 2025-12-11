import createDebug from "debug";
import ServerError from "../ServerError/ServerError.js";
import { NextFunction, Request, Response } from "express";
import statusCodes from "../globals/statusCodes.js";

const debug = createDebug("godzillas:server:error");

const handleErrors = (
  error: ServerError,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
): void => {
  debug(error.message);
  debug(error.stack ?? "No stack trace available");

  const statusCode = error.statusCode ?? statusCodes.INTERNAL_SERVER_ERROR;
  const errorMessage = {
    error:
      error instanceof ServerError && error.message
        ? error.message
        : "Internal server error",
  };

  res.status(statusCode).json(errorMessage);
};

export default handleErrors;
