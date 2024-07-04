import { UserController } from '@/controllers/user.controller';
import { uploader } from '@/middleware/uploader';
import { Router } from 'express';

export class UserRouter {
  private userController: UserController;
  private router: Router;

  constructor() {
    this.userController = new UserController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/:id', this.userController.GetUserController);
    this.router.get('/', this.userController.GetUsersController);
    this.router.post(
      '/single-upload',
      uploader('IMG', '/userImagesProfile').single('file'),
      this.userController.GetUsersController,
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
