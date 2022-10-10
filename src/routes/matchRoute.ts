import { Router } from 'express';
import { getAllProfileMatchs } from '../controllers/matchController';
import { ensureAuthenticatedMiddleware } from '../middlewares/authMiddleware';
import { validateSchema } from '../middlewares/schemaMiddleware';
import { createMatchSchema } from '../schemas/matchSchema';

const matchRouter = Router();

//matchRouter.post('/createMatch', createMatch);
matchRouter.use(ensureAuthenticatedMiddleware);
matchRouter.get('/getAllProfileMatchs', getAllProfileMatchs);

export default matchRouter;
