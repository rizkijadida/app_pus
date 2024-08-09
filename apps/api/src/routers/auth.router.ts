import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { verifyToken } from '@/middleware/verifyToken';
import { validateUser } from '@/middleware/user.validator';

export class AuthRouter {
  private authController: AuthController;
  private router: Router;
  constructor() {
    this.authController = new AuthController();
    this.router = Router();
    this.initializeRouter();
  }

  private initializeRouter() {
    this.router.post('/register', this.authController.RegisterController);
    this.router.post('/login', this.authController.LoginController);
    // this.router.get(
    //   '/keep-login',
    //   verifyToken,
    //   this.authController.KeepLoginController,
    // );
    this.router.post(
      '/verify',
      verifyToken,
      this.authController.verifyController,
    );
    // this.router.post(
    //   '/login/google',

    //   this.authController.loginGoogleController,
    // );
    // this.router.post(
    //   '/register/google',
    //   verifyToken,
    //   this.authController.registerGoogleController,
    // );
    this.router.post(
      '/verify-email',
      this.authController.verifyEmailController,
    );
    this.router.post(
      '/reset-password',
      this.authController.resetPaswwordController,
    );
  }

  public getRouter() {
    return this.router;
  }
}
