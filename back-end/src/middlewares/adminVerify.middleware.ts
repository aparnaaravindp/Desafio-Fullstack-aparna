import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

const adminVerifyMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const isAdmin: boolean = res.locals.admin;
  if (isAdmin === false) {
    throw new AppError("Insufficient permission", 403);
  }
  return next();
};

export { adminVerifyMiddleware };
