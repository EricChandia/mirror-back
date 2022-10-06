import { Router } from 'express';
import { createMatch, getAllProfileMatchs } from '../controllers/matchController';
import { validateSchema } from '../middlewares/schemaMiddleware';
import { createMatchSchema } from '../schemas/matchSchema';

const matchRouter = Router();

matchRouter.post('/createMatch', validateSchema(createMatchSchema), createMatch);
matchRouter.get('/getAllProfileMatchs', getAllProfileMatchs);

export default matchRouter;
