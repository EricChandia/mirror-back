import { prisma } from './../database/prismaClient';
import { Profile } from '@prisma/client';
import { CreateProfileData, UpdateProfileData } from '../types/profileTypes';
import { connection } from "../database/postgres";

export async function insertPhoto(profileId: number, photoUrl: string) {
    return prisma.photo.create(
        {
            data: { 
                profileId,
                photoUrl
            }
        }
    );
}

export async function getProfilePhotos(profileId: number) {
    return prisma.photo.findMany(
        {
            where: {
                profileId
            }
        }
    );
}
