import prisma from "@/prisma"
import { User } from "@/types/user.type"


export const UploadImageService = async (body:Pick<User, "image" | "id">) => {
    try {
        const {image, id} = body
        const user = await prisma.user.update({
            where: {id: id},
            data: image
        })

        if (!image) {
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