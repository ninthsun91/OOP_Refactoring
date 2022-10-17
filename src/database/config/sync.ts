import Users from "../models/user";
import Posts from "../models/post";
import Comments from "../models/comment";
import Likes from "../models/like";


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