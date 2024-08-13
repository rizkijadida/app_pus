import { CreateEventService } from '@/services/event/create.event';
import { getEventsService } from '@/services/event/get.events';
import { NextFunction, Request, Response } from 'express';

export class EventController {
  async createEventController(req: Request, res: Response, next: NextFunction) {
    try {
      const files = req.files as Express.Multer.File[];

      if (!files?.length) {
        throw new Error('no fle uploaded');
      }

      const result = await CreateEventService(req.body, files[0]);

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getEventsControlller(req: Request, res: Response, next: NextFunction) {
    try {
      const query = {
        take: parseInt(req.query.take as string) || 10,
        page: parseInt(req.query.page as string) || 1,
        sortBy: (req.query.sortBy as string) || 'createdAt',
        sortOrder: (req.query.sortOrder as string) || 'desc',
        search: (req.query.search as string) || '',
      };  
      const result = await getEventsService(query);

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
