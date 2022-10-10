import { prisma } from './../database/prismaClient';
import { Match } from '@prisma/client';
import { CreateMatchData } from '../types/matchTypes';


export async function findById(id: number):Promise<Match> {
    return prisma.match.findUnique({
      where: { id }
    });
}


export async function insertMatch(firstProfileId: number, secondProfileId: number) {
    return prisma.match.create({
      data: {
        firstProfileId,
        secondProfileId
      }
    });
}


export async function getAllProfileMatchs(profileId: number) {
  return prisma.match.findMany({
    where: {
      OR: [
        {
          firstProfileId: profileId
        },
        { 
          secondProfileId: profileId
        }
      ],
    },
    include: {
      secondProfile: {
        include: {
          photos: true
        }
      },
      firstProfile: {
        include: {
          photos: true
        }

      }
    }
  });
}
