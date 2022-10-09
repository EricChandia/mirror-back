import { Profile } from "@prisma/client";
import {profileService} from "../services/profileService";
import * as photoRepository from "../repositories/photoRepository";

async function insertPhoto(userId: number, photoUrl: string) {

    const { id }:Profile = await profileService.getUserProfile(userId);


    return await photoRepository.insertPhoto(id, photoUrl);
}

async function getProfilePhotos(userId: number) {

    const { id }:Profile = await profileService.getUserProfile(userId);


    return await photoRepository.getProfilePhotos(id);
}


export const photoService = {
    insertPhoto,
    getProfilePhotos
}