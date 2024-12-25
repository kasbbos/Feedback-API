import { Request, Response } from 'express';
import Status from '../models/Status';

class StatusController {
  static async createStatus(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const status = await Status.create({ name });
      res.status(201).json(status);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  static async getStatuses(req: Request, res: Response) {
    try {
      const statuses = await Status.findAll();
      res.status(200).json(statuses);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
}

export default StatusController;
