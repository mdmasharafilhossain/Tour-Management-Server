/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { envVars } from "../config/env";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: false,
    message: `Something Went Wrong!! ${err.message} from global error`,
    err,
    stack: envVars.NODE_ENV === "development" ? err.stack : null
  });
};
