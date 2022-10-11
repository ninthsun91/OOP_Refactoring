import { Router } from "express";
import { sync } from "../controllers/index.js";

import userRouter from "./user.js";
import postRouter from "./post.js";
import commentRouter from "./comment.js";

const router = Router();


router.get("/sync", sync);

import { authMiddleware } from "../../middlewares/auth.js";
router.get("/auth", authMiddleware, (req, res, next)=>{
    console.log("PASS");

    res.send("PASS");
});

router.use("/", userRouter);
router.use("/posts", postRouter);
router.use("/comments", commentRouter);


export default router;