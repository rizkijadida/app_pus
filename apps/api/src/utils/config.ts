import dotenv from "dotenv"

export const appConfig = {
    jwtSecretKey: process.env.JWT_SECRET_KEY || "secret",
}

export const JWT_SECRET = process.env.JWT_SECRET || '';
export const NEXT_BASE_URL = process.env.NEXT_BASE_URL || '';