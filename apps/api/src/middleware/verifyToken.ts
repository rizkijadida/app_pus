import { TokenExpiredError, verify } from "jsonwebtoken";
import { appConfig } from "../utils/config";
import { NextFunction, Request, Response } from "express";
import { User } from "@prisma/client";

const secretKey = appConfig.jwtSecretKey!;

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

  verify(token, secretKey, (err, payload) => {
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
