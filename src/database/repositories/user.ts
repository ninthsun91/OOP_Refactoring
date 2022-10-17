import Users from "../models/user";
import { Op } from "sequelize";
import { UserI } from "../../interfaces/interface";


class UserRepository extends Users {
    constructor() {
        super();
    }
    
    findOne = async(ID: number | string) => {
        return await Users.findOne({
            where: { 
                [Op.or]: [
                    { userId: ID },
                    { nickname: ID }
                ]
            },
        });
    }
    
    createOne = async(user: UserI) => {
        return await Users.create(user);
    }
}

export default new UserRepository();



// export default {
//     findOne: async(ID: number | string) => {
//         return await Users.findOne({
//             where: { 
//                 [Op.or]: [
//                     { userId: ID },
//                     { nickname: ID }
//                 ]
//             },
//         });
//     },
    
//     createOne: async(user: UserI) => {
//         return await Users.create(user);
//     }
// }


// import { models } from "../config.mjs";
// import { Op } from "sequelize";

// const { Users } = models;

// export default class UserRepository {
//     findOne = async(ID) => {
//         return await Users.findOne({
//             where: { 
//                 [Op.or]: [
//                     { userId: ID },
//                     { nickname: ID }
//                 ]
//             },
//         });
//     }
    
//     createOne = async(user) => {
//         return await Users.create(user);
//     }
// }
