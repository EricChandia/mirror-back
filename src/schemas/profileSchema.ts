import Joi from 'joi';
import { CreateProfileData, UpdateProfileData } from '../types/profileTypes';

export const createProfileSchema = Joi.object<CreateProfileData>({
  name: Joi.string().required(),
  gender: Joi.string().required(),
  lookingFor: Joi.string().required(),
  age: Joi.string().optional().allow(""),
  description: Joi.string().optional().allow(""),
  identification: Joi.string().optional().allow(""),
  occupation: Joi.string().optional().allow(""),
  schooling: Joi.string().optional().allow("")
});



export const updateProfileSchema = Joi.object<UpdateProfileData>({
    name: Joi.string().required(),
    occupation: Joi.string().required(),
    schooling: Joi.string().required()
  });
  