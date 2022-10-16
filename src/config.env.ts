import dotenv from "dotenv";

dotenv.config();

interface EnvI {
    PORT: string;
    SESSION_KEY: string;

    DB_HOST: string;
    DB_NAME: string;
    DB_USER: string;
    DB_PASSWORD: string;

    JWT_KEY: string;
    SALT_ROUND: number;
}

const env: EnvI = { 
    PORT: process.env.PORT!,
    SESSION_KEY: process.env.SESSION_KEY!,

    DB_HOST: process.env.DB_HOST || "127.0.0.1",
    DB_NAME: process.env.DB_NAME || "OOP",
    DB_USER: process.env.DB_USER || "root",
    DB_PASSWORD: process.env.DB_PASSWORD || "1234",

    JWT_KEY: process.env.JWT_KEY!,
    SALT_ROUND: Number(process.env.SALT_ROUND)
}


export default env;