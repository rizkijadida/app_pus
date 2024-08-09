import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const ValidatorHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    const errorMesssage = errors.array.toString();
    return res.status(500).send({ message: errorMesssage });
  }

  return res.status(400).send({ message: 'Success' });
  next();
};
