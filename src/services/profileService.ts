import { Profile } from "@prisma/client";
import * as profileRepository from "../repositories/profileRepository";
import { CreateProfileData, UpdateProfileData } from "../types/profileTypes";
import {
    conflictError,
    notFoundError,
    unauthorizedError
  } from '../utils/errorUtils';
  import {photoService} from "../services/photoService";
  import {dislikeService} from "../services/dislikeService";
import { likeService } from "./likeService";

async function getProfile(id: number) {
    
    const profile:Profile = await findProfileOrThrow(id);
    return profile;
}

async function getUserProfile(userId: number) {
    
    const profile = await profileRepository.findByUserId(userId);
    if(!profile){
        throw notFoundError("This profile does not exists");
    }

    return profile;
}

async function createProfile(createProfileData: CreateProfileData) {

    const profile = await profileRepository.findByUserId(createProfileData.userId);
    if(profile){
        throw conflictError("Profile already exists for this user");
    }
    
    return profileRepository.insertProfile(createProfileData);
}

async function deleteProfile(id: number) {
    await findProfileOrThrow(id);

    return await profileRepository.deleteProfile(id);

}

async function updateProfile(id:number, updateProfileData: UpdateProfileData) {
    await findProfileOrThrow(id);

    return await profileRepository.update(id, updateProfileData);
}


export async function findProfileOrThrow(id: number) {
    
    const profile = await profileRepository.findById(id);
    if(!profile){
        throw notFoundError("This profile does not exists");
    }

    return profile;

}

async function find10Profiles(userId:number) {
    //const offset = 0;
    const {id:profileId} = await profileRepository.findByUserId(userId);
    const dislikes = await dislikeService.getDislikesByProfileId(profileId);
    const likes = await likeService.getLikesByProfileId(profileId);

    let dislikesIds:Array<number> = [];
    dislikes.map(dislike => {
        dislikesIds.push(dislike.whoReceivedId);
    });

    let likesIds:Array<number> = [];
    likes.map(like => {
        likesIds.push(like.whoReceivedId);
    });


    //console.log(dislikesIds);
    const profiles = await profileRepository.find10Profiles(userId, dislikesIds, likesIds);

    return profiles;
}


export const profileService = {
    getProfile,
    getUserProfile,
    createProfile,
    deleteProfile,
    updateProfile,
    find10Profiles
};
