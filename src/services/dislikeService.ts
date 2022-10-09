import * as dislikeRepository from "../repositories/dislikeRepository";
import * as profileRepository from "../repositories/profileRepository";


async function createDislike(userId: number, whoReceivedId: number) {
    const { id: profileId } = await profileRepository.findByUserId(userId);
    
    return await dislikeRepository.insertDislike(profileId, whoReceivedId);
}


async function getDislikesByProfileId(profileId: number) {


    const dislikes = await dislikeRepository.getDislikesByProfileId(profileId);

    return dislikes;
}

  
export const dislikeService = { createDislike, getDislikesByProfileId }
  