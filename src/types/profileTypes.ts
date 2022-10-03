import { Profile } from "@prisma/client";

export type CreateProfileData = Omit<Profile, 'id' | 'userId'>;

export type UpdateProfileData = Omit<Profile, 'id' | 'userId'>;