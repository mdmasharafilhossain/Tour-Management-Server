/* eslint-disable no-console */
// Import necessary modules from express, http-status-codes, and the User model.
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";

import { UserServices } from "./user.service";
import AppError from "../../errorHelpers/AppError";


const createUser = async (req: Request, res: Response , next:NextFunction) => {
  try {
   throw new AppError(httpStatus.BAD_GATEWAY , "Fake Error")
    const user = await UserServices.createUser(req.body)

   
    res.status(httpStatus.CREATED).json({
      message: "User Created Successfully",
      user,
    });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
  
    console.log(err);

  
   next(err)
  }
};


export const UserControllers = {
  createUser,
};
