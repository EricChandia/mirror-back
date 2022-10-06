import Joi from 'joi';
import { CreateMatchData } from '../types/matchTypes';

export const createMatchSchema = Joi.object<CreateMatchData>({
  firstProfileId: Joi.number().required(),
  secondProfileId: Joi.number().required()
});
