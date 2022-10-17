import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey, NonAttribute } from "sequelize";
import sequelize from "../config/connect";
import Users from "./user";
import Posts from "./post";


class Likes extends Model<
    InferAttributes<Likes>, InferCreationAttributes<Likes>> {

    declare likeId: CreationOptional<number>;
    declare postId: ForeignKey<number>;
    declare userId: ForeignKey<number>;

    declare Post: NonAttribute<Posts>;
    declare User: NonAttribute<Users>;

}

Likes.init({
    likeId: {
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
}, {
    sequelize,
    modelName: "Likes",
});


export default Likes;

// export default function Likes(sequelize) {
//     sequelize.define("Likes", {
//         likeId: {
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
//     });
// }