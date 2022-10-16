import User from "../database/repositories/user";
import { UserI } from "../interfaces/interface";


export default {
    findNickname: async(nickname: string) => {
        const result = await User.findOne(nickname);
        
        if (result === null) return null;
        
        return { 
            userId: result.get().userId, 
            nickname: result.get().nickname,
            password: result.get().password
        };
    },

    signupUser: async(user: UserI) => {
        try {
            const result = await User.createOne(user);
            console.log(result);

            return {
                user: result.get(),
                isNewRecord: true,
            }
            
        } catch (error: any) {
            if (error.parent.code === "ER_DUP_ENTRY") {
                return { user: {}, isNewRecord: false }
            };
            return error;
        }
    }
}