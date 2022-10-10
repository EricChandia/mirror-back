import { Router } from 'express';
import { getChatByMatchId, insertMessage } from '../controllers/chatController';
import { ensureAuthenticatedMiddleware } from '../middlewares/authMiddleware';
// import { validateSchema } from '../middlewares/schemaMiddleware';
// import { signInSchema, signUpSchema } from '../schemas/userSchema';

const chatRouter = Router();

chatRouter.use(ensureAuthenticatedMiddleware);
chatRouter.post('/insertMessage', insertMessage);
chatRouter.get('/getChatMessages/:id', getChatByMatchId);

export default chatRouter;
