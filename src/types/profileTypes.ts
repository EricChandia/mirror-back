import { Profile } from "@prisma/client";

export type CreateProfileData = Omit<Profile, 'id'>;

export type UpdateProfileData = Omit<Profile, 'id'>;