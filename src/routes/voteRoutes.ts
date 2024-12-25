import { Router } from 'express';
import VoteController from '../controllers/VoteController';
import authenticate from '../middlewares/authenticate';

const router = Router();

router.post('/upvote', authenticate, VoteController.upvote);

export default router;