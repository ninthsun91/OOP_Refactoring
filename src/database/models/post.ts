import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey, NonAttribute } from "sequelize";
import sequelize from "../config/config";
import Users from "./user";


class Posts extends Model<
    InferAttributes<Posts>, InferCreationAttributes<Posts>> {

    declare postId: CreationOptional<number>;
    declare userId: ForeignKey<number>;

    declare title: string;
    declare content: string;
    declare likes: number;
    declare User: NonAttribute<Users>;

    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

Posts.init({
    postId: {
        type: DataTypes.SMALLINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
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
    title: {
        type: DataTypes.TEXT("tiny"),
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT("medium"),
        allowNull: false,
    },
    likes: {
        type: DataTypes.SMALLINT.UNSIGNED,
        defaultValue: 0,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
}, {
    sequelize,
    modelName: "Posts",
});


// sequelize.models.Posts;
export default Posts;


// export default function Posts(sequelize) {
//     sequelize.define("Posts", {
//         postId: {
//             type: DataTypes.SMALLINT.UNSIGNED,
//             autoIncrement: true,
//             primaryKey: true,
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
//         title: {
//             type: DataTypes.TEXT("tiny"),
//             allowNull: false,
//         },
//         content: {
//             type: DataTypes.TEXT("medium"),
//             allowNull: false,
//         },
//         likes: {
//             type: DataTypes.SMALLINT.UNSIGNED,
//             defaultValue: 0,
//         }
//     }, {
//         timestamps: true,
//         paranoid: false,
//     });
// }