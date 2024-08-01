import { GetCartService } from "@/services/cart/get.cart";
import { NextFunction, Request, Response } from "express";

export class CartController {
    async GetCartController(req: Request, res: Response, next: NextFunction) {
        try {
            const userDetailId = req.params.userDetailId;
            const result = await GetCartService(Number(userDetailId));
      
            return res.status(200).send(result);
          } catch (error) {
            next(error);
          }
    }
}