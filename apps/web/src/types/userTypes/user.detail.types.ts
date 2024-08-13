export interface UserDetail {
    id: number;
    user : {userId: number};
    profileImageUrl: string;
    dateOfBirth: Date;
    gender: Gender;
    adrress: {addressId: number};
    phoneNumber: string;
}

export enum Gender {
    MALE = "male",
    FEMALE = "female"
}