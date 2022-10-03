import { Router } from 'express';
import { checkIfItMatch, createLike, getLikesByProfileId } from '../controllers/likeController';
import { validateSchema } from '../middlewares/schemaMiddleware';
import { checkIfItMatchSchema, createLikeSchema } from '../schemas/likeSchema';

const likeRoute = Router();

likeRoute.post('/createLike', validateSchema(createLikeSchema), createLike);
likeRoute.get('/getLikesByProfileId/:id', getLikesByProfileId);
likeRoute.post('/checkIfItMatch', validateSchema(checkIfItMatchSchema), checkIfItMatch);

export default likeRoute;
