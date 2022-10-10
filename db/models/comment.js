import { DataTypes, Model } from "sequelize";
import sequelize from "../config.js";


class Comment extends Model {
    static associate(models) {
        this.belongsTo(models.Users, {
            foreignKey: "userId",
        });
        this.belongsTo(models.Posts, {
            foreignKey: "postId",
        });
    }
};

Comment.init({
    commentId: {
        type: DataTypes.SMALLINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    postId: {
        type: DataTypes.SMALLINT.UNSIGNED,
        references: {
            model: "Posts",
            key: "postId",
        }
    },
    userId: {
        type: DataTypes.SMALLINT.UNSIGNED,
        references: {
            model: "Users",
            key: "userId",
        }
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    sequelize,
    modelName: "Comment",
    timestamps: true,
    paranoid: true,
});

// (async()=>{
//     console.log("SYNC COMMENT");
//     await Comment.sync();
// })();


export default Comment;