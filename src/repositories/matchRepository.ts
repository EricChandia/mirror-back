import { prisma } from './../database/prismaClient';
import { Match } from '@prisma/client';
import { CreateMatchData } from '../types/matchTypes';


export async function findById(id: number):Promise<Match> {
    return prisma.match.findUnique({
      where: { id }
    });
}


export async function insertMatch(match: CreateMatchData) {
    return prisma.match.create({
      data: match
    });
}


export async function getAllProfileMatchs(profileId: number) {
  return prisma.match.findMany({
    where: {id: profileId}
  });
}
