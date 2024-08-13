import { EventController } from '@/controllers/event.controller';
import { verifyToken } from '@/lib/jwt';
import { uploader } from '@/lib/uploader';
import { Router } from 'express';

export class EventRouter {
  private eventController: EventController;
  private router: Router;
  constructor() {
    this.eventController = new EventController();
    this.router = Router();
    this.initializeRouter();
  }

  private initializeRouter() {
    this.router.post(
      '/create',
    //   verifyToken,
    uploader('IMG', '/images').fields([
        { name: 'image', maxCount: 1 },  
        { name: 'twibbon', maxCount: 1 }  
      ]),
      this.eventController.createEventController,
    );

    this.router.get('/', this.eventController.getEventsControlller);
  }

  public getRouter() {
    return this.router;
  }
}
