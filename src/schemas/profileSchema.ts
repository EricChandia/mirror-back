import Joi from 'joi';
import { CreateProfileData, UpdateProfileData } from '../types/profileTypes';

export const createProfileSchema = Joi.object<CreateProfileData>({
  name: Joi.string().required(),
  occupation: Joi.string().required(),
  schooling: Joi.string().required(),
});



export const updateProfileSchema = Joi.object<UpdateProfileData>({
    name: Joi.string().required(),
    occupation: Joi.string().required(),
    schooling: Joi.string().required()
  });
  