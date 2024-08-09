import { AuthVerifyService } from '@/services/auth/auth.verify.service';
// import { KeepLoginService } from '@/services/auth/keep-login';
// import { LoginGoogleService } from '@/services/auth/login.google.service';
import { LoginService } from '@/services/auth/login.service';
// import { RegisterGoogleService } from '@/services/auth/register.google.service';
import { RegisterService } from '@/services/auth/register.service';
import { NextFunction, Request, Response } from 'express';
import { ResetPassowrdService } from '@/services/auth/reset.password.service';
import { VerifyEmailService } from '@/services/auth/verifyEmail';   

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

  // async KeepLoginController(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const userId = Number(req.body.user.id);
  //     const result = await KeepLoginService(userId);

  //     return res.status(200).send(result);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // async loginGoogleController(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const result = await LoginGoogleService(req.body);
  //     res.status(200).send(result);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // async registerGoogleController(
  //   req: Request,
  //   res: Response,
  //   next: NextFunction,
  // ) {
  //   try {
  //     const result = await RegisterGoogleService(req.body);
  //     res.status(200).send(result);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  async verifyController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await AuthVerifyService(req.body);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async verifyEmailController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await VerifyEmailService(req.body);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async resetPaswwordController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await ResetPassowrdService(req.body);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
