import { Router } from 'express';
import { createProfile, deleteProfile, getUserProfile, updateProfile } from '../controllers/profileController';
import { validateSchema } from '../middlewares/schemaMiddleware';
import { createProfileSchema, updateProfileSchema } from '../schemas/profileSchema';

const profileRouter = Router();

profileRouter.get('/getUserProfile/:userId', getUserProfile);
profileRouter.post('/createProfile', validateSchema(createProfileSchema), createProfile);
profileRouter.delete('/deleteProfile/:id', deleteProfile);
profileRouter.post('/updateProfile/:id', validateSchema(updateProfileSchema), updateProfile);



export default profileRouter;
