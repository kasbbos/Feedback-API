import { Request, Response } from 'express';
import VoteService from '../services/VoteService';

class VoteController {
  static async upvote(req: Request, res: Response) {
    try {
      const { feedbackId } = req.body;
      const { id: userId } = (req as any).user;
      const upvote = await VoteService.upvoteFeedback(Number(feedbackId), Number(userId));
      res.status(201).json(upvote);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
}

export default VoteController;
