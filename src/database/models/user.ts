import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
import sequelize from "../config/config";


class Users extends Model<
    InferAttributes<Users>, InferCreationAttributes<Users>> {
    
    declare userId: CreationOptional<number>;

    declare nickname: string;
    declare password: string;

    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;

}

Users.init({
    userId: {
        type: DataTypes.SMALLINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    nickname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
}, {
    sequelize,
    modelName: "Users",
});


export default Users;

// export default function Users(sequelize) {
//     sequelize.define("Users", {
//         userId: {
//             type: DataTypes.SMALLINT.UNSIGNED,
//             autoIncrement: true,
//             primaryKey: true,
//         },
//         nickname: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//     }, {
//         timestamps: true,
//         paranoid: true,
//     });
// }