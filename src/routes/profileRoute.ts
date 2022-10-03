import { Router } from 'express';
import { createProfile, deleteProfile, getUserProfile, updateProfile } from '../controllers/profileController';
import { validateSchema } from '../middlewares/schemaMiddleware';
import { createProfileSchema, updateProfileSchema } from '../schemas/profileSchema';

const authRouter = Router();

authRouter.get('/getUserProfile/:userId', getUserProfile);
authRouter.post('/createProfile/:userId', validateSchema(createProfileSchema), createProfile);
authRouter.delete('/deleteProfile/:userId', deleteProfile);
authRouter.post('/updateProfile/:userId', validateSchema(updateProfileSchema), updateProfile);



export default authRouter;
