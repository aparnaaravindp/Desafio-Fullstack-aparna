import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

const notAdminVerifyMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const isAdmin: boolean = res.locals.admin;

  if (isAdmin === false) {
    if (res.locals.id === req.params.id) {
      return next();
    }
    throw new AppError("Insufficient permission", 403);
  }
  return next();
};

export { notAdminVerifyMiddleware };