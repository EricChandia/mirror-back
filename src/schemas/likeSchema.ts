import Joi from 'joi';
import { CreateLikeData } from '../types/likeTypes';

export const createLikeSchema = Joi.object<CreateLikeData>({
  whoLikedId: Joi.number().required(),
  whoReceivedId: Joi.number().required()
});



export const checkIfItMatchSchema = Joi.object({
  userProfileId: Joi.number().required(),
  likeGivenProfileId: Joi.number().required()
});

