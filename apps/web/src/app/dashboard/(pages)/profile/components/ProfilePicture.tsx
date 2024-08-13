"use client"
import { UserDetail } from "@/types/userTypes/user.detail.types";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProfilePictureProps extends Pick<UserDetail, "profileImageUrl" | "id"> {}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ profileImageUrl, id }) => {
  return (
    <div>
      <Avatar className="size-20">
        <AvatarImage src="" alt="" className="object-cover"/>
        <AvatarFallback>Foto Profil</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default ProfilePicture;
