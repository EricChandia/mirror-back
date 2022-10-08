import { Router } from 'express';
import { createProfile, deleteProfile, find10Profiles, getUserProfile, updateProfile } from '../controllers/profileController';
import { validateSchema } from '../middlewares/schemaMiddleware';
import { createProfileSchema, updateProfileSchema } from '../schemas/profileSchema';
import { ensureAuthenticatedMiddleware } from '../middlewares/authMiddleware';


const profileRouter = Router();

profileRouter.use(ensureAuthenticatedMiddleware);
profileRouter.get('/getUserProfile', getUserProfile);
profileRouter.post('/createProfile', validateSchema(createProfileSchema), createProfile);
profileRouter.delete('/deleteProfile/:id', deleteProfile);
profileRouter.post('/updateProfile/:id', validateSchema(updateProfileSchema), updateProfile);
profileRouter.get('/find10Profiles', find10Profiles);

export default profileRouter;
