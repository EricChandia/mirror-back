import { Profile } from "@prisma/client";

export type CreateProfileData = Omit<Profile, 'id | age | occupation | schooling | description | identification'>;

export type UpdateProfileData = Omit<Profile, 'id | age | occupation | schooling | description | identification'>;