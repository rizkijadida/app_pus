import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const validateUser = [
  body("email").notEmpty().withMessage("harap masukkan email dengan benar") ,
  body("password").notEmpty().withMessage("password tidak memenuhi syarat"),
  body("fullName").notEmpty().withMessage("masukkan nama anda dengan benar"),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        return res.status(400).send({errors: errors.array()});
    }
    next();
  },
];
