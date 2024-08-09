import { Router } from 'express';

export class CartRouter {
  private router: Router;
  constructor() {
    this.router = Router();
  }

  public getRouter() {
    return this.router;
  }
}
