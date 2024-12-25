import { Request, Response } from 'express';
import FeedbackService from '../services/FeedbackService';

class FeedbackController {
  static async createFeedback(req: Request, res: Response) {
    try {
      const { title, description, categoryId, statusId } = req.body;
      const { id: authorId } = (req as any).user;
      const feedback = await FeedbackService.createFeedback(title, description, categoryId, statusId, authorId);
      res.status(201).json(feedback);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
  
  static async getFeedback(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const feedback = await FeedbackService.getFeedbackById(Number(id));
      res.status(200).json(feedback);
    } catch (error) {
      res.status(404).json({ error: (error as Error).message });
    }
  }

  static async updateFeedback(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updates = req.body;
      const feedback = await FeedbackService.updateFeedback(Number(id), updates);
      res.status(200).json(feedback);
    } catch (error) {
      res.status(404).json({ error: (error as Error).message });
    }
  }

  static async deleteFeedback(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await FeedbackService.deleteFeedback(Number(id));
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ error: (error as Error).message });
    }
  }

  static async getAllFeedbacks(req: Request, res: Response) {
    try {
      const { categoryId, statusId, sort = 'createdAt', page = 1, limit = 10 } = req.query;
  
      const filter: any = {};
      if (categoryId) filter.categoryId = Number(categoryId);
      if (statusId) filter.statusId = Number(statusId);
  
      const feedbacks = await FeedbackService.getAllFeedbacks(filter, sort as string, Number(page), Number(limit));
      res.status(200).json(feedbacks);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
}

export default FeedbackController;
