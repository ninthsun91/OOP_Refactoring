import Users from "../models/user";
import Posts from "../models/post";
import Comments from "../models/comment";
import Likes from "../models/like";


export default function associateModels() {
    Users.hasMany(Posts, {
        as: "Posts",
        foreignKey: "userId"
    });
    Posts.belongsTo(Users, {
        foreignKey: "userId"
    });

    Users.hasMany(Comments, {
        as: "Comments",
        foreignKey: "userId"
    });
    Comments.belongsTo(Users, {
        foreignKey: "userId"
    });

    Users.hasMany(Likes, {
        as: "Likes",
        foreignKey: "userId"
    });
    Likes.belongsTo(Users, {
        foreignKey: "userId"
    });

    Posts.hasMany(Comments, {
        as: "Comments",
        foreignKey: "postId"
    });
    Comments.belongsTo(Posts, {
        foreignKey: "postId"
    });

    Posts.hasMany(Likes, {
        as: "Likes",
        foreignKey: "postId"
    });
    Likes.belongsTo(Posts, {
        foreignKey: "postId"
    });
}


// export default function associateModels(sequelize) {
//     const { Users, Posts, Comments, Likes } = sequelize.models;

//     Users.hasMany(Posts, {
//         as: "Posts",
//         foreignKey: "userId"
//     });
//     Posts.belongsTo(Users, {
//         foreignKey: "userId"
//     });

//     Users.hasMany(Comments, {
//         as: "Comments",
//         foreignKey: "userId"
//     });
//     Comments.belongsTo(Users, {
//         foreignKey: "userId"
//     });

//     Users.hasMany(Likes, {
//         as: "Likes",
//         foreignKey: "userId"
//     });
//     Likes.belongsTo(Users, {
//         foreignKey: "userId"
//     });

//     Posts.hasMany(Comments, {
//         as: "Comments",
//         foreignKey: "postId"
//     });
//     Comments.belongsTo(Posts, {
//         foreignKey: "postId"
//     });

//     Posts.hasMany(Likes, {
//         as: "Likes",
//         foreignKey: "postId"
//     });
//     Likes.belongsTo(Posts, {
//         foreignKey: "postId"
//     });
// }