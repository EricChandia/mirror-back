import { db, objectId } from "../database/mongodb";

//matchId: number, time: string, whoSendedId: number, whoReceivedId:number, message: string
export async function insertMessage(messageInsertData: any) {
    
    await db.collection("chats").insertOne(messageInsertData);

}


export async function getChatByMatchId(matchId: number) {
    
   return await db.collection("chats").find({ matchId }).toArray();

}