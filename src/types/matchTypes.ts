import { Match } from  "@prisma/client";

export type CreateMatchData = Omit<Match, 'id'>;