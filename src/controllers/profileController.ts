import { Request, Response } from 'express';
import { profileService } from '../services/profileService';
import { CreateProfileData, UpdateProfileData } from '../types/profileTypes';

export async function getProfile(req: Request, res: Response) {
    
    const { id } = req.params;

    const profile = await profileService.getProfile(Number(id));

    res.status(200).send(profile);
}

export async function getUserProfile(req: Request, res: Response) {
    const { id:userId } = res.locals.user;

    const profile = await profileService.getUserProfile(Number(userId));

    res.status(200).send(profile);
}




export async function createProfile(req: Request, res: Response) {
    const { id } = res.locals.user;
    const data:any = req.body;

    console.log(id);
    console.log(data);

    const createProfileData: CreateProfileData = { ...data, userId: id }

    const profileCreated = await profileService.createProfile(createProfileData);

    res.status(201).send(profileCreated);
    //res.sendStatus(201);
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

export async function find10Profiles(req: Request, res: Response) {
    const { id:userId } = res.locals.user;


    const profiles = await profileService.find10Profiles(Number(userId));
    res.status(200).send(profiles);
}

