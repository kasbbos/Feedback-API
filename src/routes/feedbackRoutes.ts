import { Router } from 'express';
import FeedbackController from '../controllers/FeedbackController';
import authenticate from '../middlewares/authenticate';

const router = Router();

router.post('/', authenticate, FeedbackController.createFeedback);
router.get('/:id', FeedbackController.getFeedback);
router.put('/:id', authenticate, FeedbackController.updateFeedback);
router.delete('/:id', authenticate, FeedbackController.deleteFeedback);
router.get('/', FeedbackController.getAllFeedbacks);

export default router;
