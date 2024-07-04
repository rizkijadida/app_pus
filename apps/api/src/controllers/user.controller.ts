import { GetUserService } from '@/services/users/get.user';
import { GetUsersService } from '@/services/users/get.users';
import { UploadImageService } from '@/services/users/upload.image';
// import { UploadImageService } from '@/services/users/upload.image';
import { NextFunction, Request, Response } from 'express';

export class UserController {
  async GetUserController(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const result = await GetUserService(Number(id));

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async GetUsersController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await GetUsersService(req.body);

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async UploadImageControler(req: Request, res: Response, next: NextFunction) {
    try {
      const {file} = req.body
      console.log(file);
      
      const result = await UploadImageService(file)
      return res.send(200).send(result)
    } catch (error) {
      next(error);
    }
  }
}
