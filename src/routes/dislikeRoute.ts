import { Router } from 'express';
import { createDislike } from '../controllers/dislikeController';
import { ensureAuthenticatedMiddleware } from '../middlewares/authMiddleware';

const dislikeRoute = Router();

dislikeRoute.use(ensureAuthenticatedMiddleware);
dislikeRoute.post('/dislikeProfile/:id', createDislike);

export default dislikeRoute;
