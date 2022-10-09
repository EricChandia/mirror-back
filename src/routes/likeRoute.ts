import { Router } from 'express';
import { checkIfItMatch, createLike, getLikesByProfileId } from '../controllers/likeController';
import { ensureAuthenticatedMiddleware } from '../middlewares/authMiddleware';
import { validateSchema } from '../middlewares/schemaMiddleware';
import { checkIfItMatchSchema, createLikeSchema } from '../schemas/likeSchema';

const likeRoute = Router();

likeRoute.use(ensureAuthenticatedMiddleware);
likeRoute.post('/likeProfile/:id', createLike);
likeRoute.get('/getLikesByProfileId/:id', getLikesByProfileId);
likeRoute.post('/checkIfItMatch', validateSchema(checkIfItMatchSchema), checkIfItMatch);

export default likeRoute;
