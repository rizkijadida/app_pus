import prisma from "@/prisma"
import { UserDetail } from "@/types/user.detail.type"



export const UploadImageService = async (body:Pick<UserDetail, "proifleImageUrl" | "userId">) => {
    try {
        const {proifleImageUrl, userId} = body
        const user = await prisma.user.update({
            where: {id: userId},
            data: proifleImageUrl
        })

        if(userId !== userId) {
            throw new Error("error")
        }

        if (!proifleImageUrl) {
            throw new Error("no image uploaded")
        }

        return {
            message: "successfully uploaded file",
            data: user
        }
        
    } catch (error) {
        throw error
    }
}