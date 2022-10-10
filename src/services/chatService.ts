import * as chatRepository from "../repositories/chatRepository";
import { profileService } from "./profileService";
import dayjs from "dayjs";


async function insertMessage(matchId: number, userId: number, whoReceivedId:number, message: string) {
    const { id: whoSendedId } = await profileService.getUserProfile(userId);
    //const time:string = "21:59:00";

    const time = dayjs().format("HH:MM");

    const messageInsertData = {
        matchId,
        time,
        whoSendedId,
        whoReceivedId,
        message
    }
    
    await chatRepository.insertMessage(messageInsertData);
}

async function getChatByMatchId(matchId: number) {
    const messages = chatRepository.getChatByMatchId(matchId);

    return messages;
}

export const chatService = {
    insertMessage,
    getChatByMatchId
}