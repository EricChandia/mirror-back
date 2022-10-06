import { Match } from "@prisma/client";
import * as matchRepository from "../repositories/matchRepository";
import { CreateMatchData } from "../types/matchTypes";
import { findProfileOrThrow } from "./profileService";


async function createMatch(createMatchData: CreateMatchData) {

    await findProfileOrThrow(createMatchData.firstProfileId);
    await findProfileOrThrow(createMatchData.secondProfileId);

    await matchRepository.insertMatch(createMatchData);
}


async function getAllProfileMatchs(profileId: number) {

    await findProfileOrThrow(profileId);

    return await matchRepository.getAllProfileMatchs(profileId);
}

export const matchService = {
    createMatch, getAllProfileMatchs
}