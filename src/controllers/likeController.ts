import { Request, Response } from 'express';
import { likeService } from '../services/likeService';
import { CreateLikeData } from '../types/likeTypes';


export async function createLike(req: Request, res: Response) {
    
    const createLikeData:CreateLikeData = req.body;

    await likeService.createLike(createLikeData);

    res.sendStatus(200);
}


export async function getLikesByProfileId(req: Request, res: Response) {
    
    const { id } = req.params;

    await likeService.getLikesByProfileId(Number(id));

    res.sendStatus(200);
}

export async function checkIfItMatch(req: Request, res: Response) {
    
    const { userProfileId, likeGivenProfileId } = req.body;

    const matchInformation = await likeService.checkIfItMatch(Number(userProfileId), Number(likeGivenProfileId));

    res.status(200).send(matchInformation);
}