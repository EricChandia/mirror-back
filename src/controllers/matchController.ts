import { Request, Response } from 'express';
import { matchService } from '../services/matchService';
import { CreateMatchData } from '../types/matchTypes';



// export async function createMatch(req: Request, res: Response) {
    
//     const createMatchData:CreateMatchData = req.body;

//     await matchService.createMatch(createMatchData);

//     res.sendStatus(201);
// }



export async function getAllProfileMatchs(req: Request, res: Response) {
    
    const { id:userId }  = res.locals.user;

    const profileMatchs = await matchService.getAllProfileMatchs(Number(userId));

    res.status(200).send(profileMatchs);
}

