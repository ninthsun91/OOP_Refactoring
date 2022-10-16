import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey, NonAttribute } from "sequelize";
import sequelize from "../config/config";
import Users from "./user";
import Posts from "./post";

class Comments extends Model<
    InferAttributes<Comments>, InferCreationAttributes<Comments>> {

    declare commentId: CreationOptional<number>;
    declare postId: ForeignKey<number>;
    declare userId: ForeignKey<number>;

    declare comment: string;
    declare Post: NonAttribute<Posts>;
    declare User: NonAttribute<Users>;

    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

Comments.init({
    commentId: {
        type: DataTypes.SMALLINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    postId: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
        references: {
            model: "Posts",
            key: "postId",
        },
        onDelete: "cascade",
    },
    userId: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
        references: {
            model: "Users",
            key: "userId",
        },
        onDelete: "cascade",
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
},{
    sequelize,
    modelName: "Comments",
});


export default Comments;

// export default function Comments(sequelize) {
//     sequelize.define("Comments", {
//         commentId: {
//             type: DataTypes.SMALLINT.UNSIGNED,
//             autoIncrement: true,
//             primaryKey: true,
//         },
//         postId: {
//             type: DataTypes.SMALLINT.UNSIGNED,
//             allowNull: false,
//             references: {
//                 model: "Posts",
//                 key: "postId",
//             },
//             onDelete: "cascade",
//         },
//         userId: {
//             type: DataTypes.SMALLINT.UNSIGNED,
//             allowNull: false,
//             references: {
//                 model: "Users",
//                 key: "userId",
//             },
//             onDelete: "cascade",
//         },
//         comment: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//     },{
//         timestamps: true,
//         paranoid: false,
//     });
// }