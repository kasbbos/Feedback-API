import { Router } from 'express';
import StatusController from '../controllers/StatusController';

const router = Router();

router.post('/', StatusController.createStatus);
router.get('/', StatusController.getStatuses);

export default router;
