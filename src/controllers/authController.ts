import { Request, Response } from 'express';

import userService from '../services/userService';

export async function signUp(req: Request, res: Response) {
  const user = req.body;
  delete user.confirmPassword;
  await userService.createUser(user);
  res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
  const user = req.body;
  const token = await userService.login(user);
  res.send({ token });
}
