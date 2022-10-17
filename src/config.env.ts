import dotenv from "dotenv";
import { ConnOptions } from "./interfaces/interface"

dotenv.config();


class dbConn implements ConnOptions {
    declare DB_NAME: string;
    declare DB_USER: string;
    declare DB_PASSWORD: string;
    declare DB_HOST: string;

    constructor() {
        this.setEnv()
    }
    setEnv() {
        const MODE = process.env.MODE
        switch (MODE) {
            case 'aws':
                this.DB_NAME = process.env.DB_NAME!;
                this.DB_USER = process.env.DB_USER!;
                this.DB_PASSWORD = process.env.DB_PASSWORD!;
                this.DB_HOST = process.env.DB_HOST!;
                break;
        
            case 'local':
                this.DB_NAME = process.env.LOCAL_NAME!;
                this.DB_USER = process.env.LOCAL_USER!;
                this.DB_PASSWORD = process.env.LOCAL_PASSWORD!;
                this.DB_HOST = process.env.LOCAL_HOST!;
                break;
        
            case 'test':
                this.DB_NAME = process.env.TEST_NAME!;
                this.DB_USER = process.env.TEST_USER!;
                this.DB_PASSWORD = process.env.TEST_PASSWORD!;
                this.DB_HOST = process.env.TEST_HOST!;
                break;
        }
    }
}


class Env extends dbConn {
    PORT: number;
    SESSION_KEY: string;
    JWT_KEY: string;
    SALT_ROUND: number;

    constructor() {
        super();
        
        this.PORT = Number(process.env.PORT);
        this.SESSION_KEY = process.env.SESSION_KEY!;
        this.JWT_KEY = process.env.JWT_KEY!;
        this.SALT_ROUND = Number(process.env.SALT_ROUND);
    }    
}


export default new Env();