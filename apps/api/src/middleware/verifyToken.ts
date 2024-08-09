import { TokenExpiredError, verify } from "jsonwebtoken";

import { NextFunction, Request, Response } from "express";
import { User } from "@prisma/client";
import { JWT_SECRET } from "@/config";

const secretKey = JWT_SECRET;

interface PayloadToken extends Pick<User, "id"> {}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1]!;

  if (!token) {
    res.status(401).send({
      message: "token is missing",
    });
  }

  verify(token, secretKey, (err: any, payload:any) => {
    if (err) {
      if (err instanceof TokenExpiredError) {
        return res.status(401).send({ message: "token expired" });
      } else {
        return res.status(401).send({ message: "invalid token" });
      }
    }

    req.body.user = payload as PayloadToken;
    next();
  });
};
