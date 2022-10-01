import { prisma } from './../database/prismaClient';
import { Profile } from '@prisma/client';
import { CreateProfileData, UpdateProfileData } from '../types/profileTypes';
import { mapObjectToUpdateQuery } from '../utils/sqlUtils';

export async function findById(id: number):Promise<Profile> {
    return prisma.profile.findUnique({
      where: { id }
    });
}



export async function insertProfile(profile: CreateProfileData) {
    return prisma.profile.create({
      data: profile
    });
}


export async function deleteProfile(id: number) {
    return prisma.profile.delete({
      where: { id }
    });
}


export async function update(id: number, profileData: UpdateProfileData) {
    

    prisma.profile.update({
        where: {id},
        data: {
           name: profileData.name,
           occupation: profileData.occupation,
           schooling: profileData.schooling, 
        }
    });
  }