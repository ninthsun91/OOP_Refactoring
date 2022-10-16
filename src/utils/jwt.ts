import jwt from "jsonwebtoken";
import env from "../config.env";
import { PayloadI } from "../interfaces/interface";

export default {
    sign: (payload: PayloadI)=>{
        return jwt.sign(payload, env.JWT_KEY, {
            algorithm: "HS256",
            expiresIn: 60*10,
        });
    },
    verify: (accessToken: string)=>{
        try {
            const payload = jwt.verify(accessToken, env.JWT_KEY);
            return payload;            
        } catch (error) {
            return null;
        }
    },
    refresh: ()=>{
        return jwt.sign({}, env.JWT_KEY, {
            algorithm: "HS256",
            expiresIn: 60*60*24,
        });
    },
    refreshVerify: function(refreshToken: string) {
        return this.verify(refreshToken);
    }
}