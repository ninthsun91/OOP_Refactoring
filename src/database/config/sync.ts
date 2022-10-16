import { Sequelize } from "sequelize";
import Users from "../models/user";
import Posts from "../models/post";
import Comments from "../models/comment";
import Likes from "../models/like";
// import dotenv from "dotenv";

// dotenv.config();

// const MODE = process.env.MODE;
// switch (MODE) {
//     case "local":
//         var [ DB_HOST, DB_NAME, DB_USER, DB_PASSWORD ] = 
//             [ "127.0.0.1", "OOP", "root", "1234" ];
//         break;

//     case "aws":
//         var { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env;
//         break;
// }

// const sequelize = new Sequelize(
//     DB_NAME,
//     DB_USER,
//     DB_PASSWORD,
//     {
//         dialect: "mysql",
//         host: DB_HOST,
//         // logging: false,
//     }
// );

(async function syncTables() {
    // console.log(DB_HOST);
    await Likes.drop();
    await Comments.drop();
    await Posts.drop();
    await Users.drop();

    await Users.sync();
    await Posts.sync();
    await Comments.sync();
    await Likes.sync();
})();

// (function() {
//     console.log("SYNC SCRIPT");
// })();