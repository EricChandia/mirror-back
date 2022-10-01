import { prisma } from './../database/prismaClient';
import { Like } from '@prisma/client';
import { CreateLikeData } from '../types/likeTypes';


export async function findById(id: number):Promise<Like> {
    return prisma.like.findUnique({
      where: { id }
    });
}


export async function insertLike(like: CreateLikeData) {
    return prisma.like.create({
      data: like
    });
}


export async function getLikesByProfileId(whoLikedId: number) {
    return prisma.like.findMany({
      where: {
        whoLikedId
      }
    });
}

//select * from likes where "whoLikedId" = 2 and "whoReceivedId" = 1;
//whoLiked = profile da pessoa que eu curti
//whoReceived = minha profile
export async function checkIfItMatch(profileId: number, whoLikedId: number) {
    return prisma.like.findMany({
      where: {
        whoLikedId: whoLikedId,
        whoReceivedId: profileId
      }
    });
}
