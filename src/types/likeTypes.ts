import { Like } from "@prisma/client";

export type CreateLikeData = Omit<Like, 'id'>;