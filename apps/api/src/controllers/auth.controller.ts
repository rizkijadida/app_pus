import { ForgotPassowrdService } from '@/services/auth/forgot-password';
import { KeepLoginService } from '@/services/auth/keep-login';
import { LoginService } from '@/services/auth/login.service';
import { RegisterService } from '@/services/auth/register.service';
import { NextFunction, Request, Response } from 'express';

export class AuthController {
  async RegisterController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await RegisterService(req.body);

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async LoginController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await LoginService(req.body);

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async KeepLoginController(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(req.body.user.id);
      const result = await KeepLoginService(userId);

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async ForgotPasswordController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { email } = req.body;
      const result = await ForgotPassowrdService(email);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

}
