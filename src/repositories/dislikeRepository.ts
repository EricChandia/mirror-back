import { prisma } from './../database/prismaClient';


export async function insertDislike(whoDislikeId: number, whoReceivedId: number) {
    return prisma.dislike.create({
        data: {
          whoDislikeId,
          whoReceivedId
        }
    });
}


export async function getDislikesByProfileId(profileId: number) {
    return prisma.dislike.findMany({
      where: {
        whoDislikeId: profileId
      },
      select: {
        whoReceivedId: true
      }
    });
}
