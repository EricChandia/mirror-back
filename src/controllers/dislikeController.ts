import { Request, Response } from 'express';
import { dislikeService } from '../services/dislikeService';


export async function createDislike(req: Request, res: Response) {
    const { id:userId } = res.locals.user;
    const { id:whoReceivedId } = req.params;

    await dislikeService.createDislike(userId, Number(whoReceivedId));

    res.sendStatus(200);
}

