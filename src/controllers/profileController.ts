import { Request, Response } from 'express';
import { profileService } from '../services/profileService';
import { CreateProfileData, UpdateProfileData } from '../types/profileTypes';

export async function getProfile(req: Request, res: Response) {
    
    const { id } = req.params;

    const profile = await profileService.getProfile(Number(id));

    res.status(200).send(profile);
}

export async function getUserProfile(req: Request, res: Response) {
    
    const { userId } = req.params;

    const profile = await profileService.getUserProfile(Number(userId));

    res.status(200).send(profile);
}




export async function createProfile(req: Request, res: Response) {
    
    const createProfileData:CreateProfileData = req.body;

    const profileCreated = await profileService.createProfile(createProfileData);

    res.status(201).send(profileCreated);
}


export async function deleteProfile(req: Request, res: Response) {
    
    const { id } = req.params;

    await profileService.deleteProfile(Number(id));

    res.sendStatus(200);
}

export async function updateProfile(req: Request, res: Response) {
    const { id } = req.params;
    const updateProfileData:UpdateProfileData = req.body;

    const updatedProfile = await profileService.updateProfile(Number(id), updateProfileData);
    res.status(200).send(updatedProfile);
}

