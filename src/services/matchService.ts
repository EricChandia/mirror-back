import { Match } from "@prisma/client";
import * as matchRepository from "../repositories/matchRepository";
import { CreateMatchData } from "../types/matchTypes";
import { findProfileOrThrow, profileService } from "./profileService";


async function createMatch(firstProfileId: number, secondProfileId: number) {

    await findProfileOrThrow(firstProfileId);
    await findProfileOrThrow(secondProfileId);

    await matchRepository.insertMatch(firstProfileId, secondProfileId);
}


async function getAllProfileMatchs(userId: number) {

    const { id:profileId } = await profileService.getUserProfile(userId);

    const allMatchsData = await matchRepository.getAllProfileMatchs(profileId);
    //console.log(allMatchsData);

    let allMatchsFiltered = [];

    allMatchsData.map(match => {
        if(match.firstProfile.id !== profileId){
            allMatchsFiltered.push({matchId: match.id, profile: match.firstProfile});
            console.log("caiu aqui");
        }
        if(match.secondProfile.id !== profileId){
            allMatchsFiltered.push({matchId: match.id, profile: match.secondProfile});
        }
    });

    return allMatchsFiltered;
}

export const matchService = {
    createMatch, getAllProfileMatchs
}