// @ts-check

import { Router } from "express";
// import { sync } from "../controllers/index.mjs";

import userRouter from "./user";
// import postRouter from "./post";
// import commentRouter from "./comment";


const router = Router();

router.get("/api", (req, res, next)=>{
    res.redirect("https://app.swaggerhub.com/apis-docs/NINTHSUN91_1/hanghae_week4/1.0.0#/")
});

// RECREATE TABLES
// router.get("/sync", sync);

router.use("/", userRouter);
// router.use("/posts", postRouter);
// router.use("/comments", commentRouter);


export default router;