import { CartController } from '@/controllers/cart.controller';
import { Router } from 'express';

export class CartRouter {
  private CartController: CartController;
  private router: Router;
  constructor() {
    this.CartController = new CartController();
    this.router = Router();
    this.initializeRouter();
  }

  private initializeRouter() {
    this.router.get(
      '/show-cart',
      this.CartController.GetCartController,
    );
  }

  public getRouter() {
    return this.router;
  }
}
