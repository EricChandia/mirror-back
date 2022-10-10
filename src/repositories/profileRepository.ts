import { prisma } from './../database/prismaClient';
import { Profile } from '@prisma/client';
import { CreateProfileData, UpdateProfileData } from '../types/profileTypes';
import { connection } from "../database/postgres";

export async function findById(id: number):Promise<Profile> {
    return prisma.profile.findUnique({
      where: { id }
    });
}


export async function findByUserId(userId: number) {
  return prisma.profile.findFirst({
    where: { userId },
    include: {
      photos: true
    }
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
    

    return prisma.profile.update({
        where: {id},
        data: {
           name: profileData.name,
           occupation: profileData.occupation,
           schooling: profileData.schooling, 
        }
    });
  }

export async function find10Profiles(userId: number, dislikesIds: Array<number>, likesIds: Array<number>, lookingFor: string) {
    // const result = await connection.query(
    //   'select * from profiles where "userId" != $1 limit 10 offset $2',
    //   [userId, offset]
    // );
  
    // return result.rows;

    return prisma.profile.findMany({
      orderBy: [
        {
          userId: 'asc'
        }
      ],
      where: {
        userId:{
          not: userId
        },
        id: {
          notIn: [...dislikesIds, ...likesIds],
        },
        gender: lookingFor
      },
      include: {
        photos: true
      },
      take: 10
    });
}