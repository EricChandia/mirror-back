import { Like } from "@prisma/client";
import * as likeRepository from "../repositories/likeRepository";

import { CreateLikeData } from "../types/likeTypes";

import {
    conflictError,
    notFoundError,
    unauthorizedError
  } from '../utils/errorUtils';
import { matchService } from "./matchService";
import { findProfileOrThrow, profileService } from "./profileService";


async function createLike(userId: number, whoReceivedId: number) {
    const { id: whoLikedId } = await profileService.getUserProfile(userId) ;

    // await findProfileOrThrow(like.whoLikedId);
    await findProfileOrThrow(whoReceivedId);

    const createLikeData:CreateLikeData = { whoLikedId, whoReceivedId };
    const createdLike:Object = await likeRepository.insertLike(createLikeData);

    const match = await checkIfItMatch(whoLikedId, whoReceivedId);

    if(match === true){
        matchService.createMatch(whoLikedId, whoReceivedId);
    }

    return {...createdLike, match};
}


async function getLikesByProfileId(whoLikedId: number) {

    await findProfileOrThrow(whoLikedId);

    return await likeRepository.getLikesByProfileId(whoLikedId);
}


async function checkIfItMatch(userProfileId: number, likeGivenProfileId: number) {
    const match = await likeRepository.checkIfItMatch(userProfileId, likeGivenProfileId);
    console.log(match);

    if(match.length>0){
        return true;
    }

    return false;
}

  
export const likeService = {
    createLike, checkIfItMatch, getLikesByProfileId
}
  