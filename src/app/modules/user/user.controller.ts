/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
// Import necessary modules from express, http-status-codes, and the User model.
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";

import { UserServices } from "./user.service";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";



const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const user = await UserServices.createUser(req.body);

   sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "User Created Successfully",
        data: user,
    })
});

const getAllUsers = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await UserServices.getAllUsers();

  sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "All Users Retrieved Successfully",
        data: result.data,
        meta: result.meta
    })
});




export const UserControllers = {
  createUser,
  getAllUsers
};
