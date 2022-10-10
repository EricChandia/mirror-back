import { Request, Response } from 'express';
import { chatService } from '../services/chatService';


export async function insertMessage(req: Request, res: Response) {
    const { id:userId } = res.locals.user;
    const { matchId, whoReceivedId, message } = req.body;

    await chatService.insertMessage(matchId, userId, whoReceivedId, message);

    res.sendStatus(201);
}




export async function getChatByMatchId(req: Request, res: Response) {
    const { id:matchId } = req.params;

    const messages = await chatService.getChatByMatchId(Number(matchId));

    res.status(200).send(messages);
}

