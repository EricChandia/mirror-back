import { Like } from "@prisma/client";
import * as likeRepository from "../repositories/likeRepository";

import { CreateLikeData } from "../types/likeTypes";

import {
    conflictError,
    notFoundError,
    unauthorizedError
  } from '../utils/errorUtils';
import { findProfileOrThrow } from "./profileService";


async function createLike(like: CreateLikeData) {

    await findProfileOrThrow(like.whoLikedId);
    await findProfileOrThrow(like.whoReceivedId);

    return await likeRepository.insertLike(like);
}


async function getLikesByProfileId(whoLikedId: number) {

    await findProfileOrThrow(whoLikedId);

    return await likeRepository.getLikesByProfileId(whoLikedId);
}


async function checkIfItMatch(userProfileId: number, likeGivenProfileId: number) {
    const match = await likeRepository.checkIfItMatch(userProfileId, likeGivenProfileId);

    if(!match){
        return false;
    }
    
    
    return true;
}

  
export const likeService = {
    createLike, checkIfItMatch, getLikesByProfileId
}
  