import { Profile } from "@prisma/client";
import * as profileRepoitory from "../repositories/profileRepository";
import { CreateProfileData, UpdateProfileData } from "../types/profileTypes";
import {
    conflictError,
    notFoundError,
    unauthorizedError
  } from '../utils/errorUtils';
  

async function getProfile(id: number) {
    
    const profile:Profile = await findProfileOrThrow(id);
    return profile;
}

async function getUserProfile(userId: number) {
    
    const profile = await profileRepoitory.findByUserId(userId);
    if(!profile){
        throw notFoundError("This profile does not exists");
    }

    return profile;
}

async function createProfile(createProfileData: CreateProfileData) {

    const profile = await profileRepoitory.findByUserId(createProfileData.userId);
    if(profile){
        throw conflictError("Profile already exists for this user");
    }
    
    return profileRepoitory.insertProfile(createProfileData);
}

async function deleteProfile(id: number) {
    await findProfileOrThrow(id);

    return await profileRepoitory.deleteProfile(id);

}

async function updateProfile(id:number, updateProfileData: UpdateProfileData) {
    await findProfileOrThrow(id);

    return await profileRepoitory.update(id, updateProfileData);
}


export async function findProfileOrThrow(id: number) {
    
    const profile = await profileRepoitory.findById(id);
    if(!profile){
        throw notFoundError("This profile does not exists");
    }

    return profile;

}

export const profileService = {
    getProfile,
    getUserProfile,
    createProfile,
    deleteProfile,
    updateProfile
};