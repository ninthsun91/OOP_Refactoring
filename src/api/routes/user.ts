import { Router } from "express";
import User from "../controllers/user";
import auth from "../../middlewares/auth";


const router = Router();

/**
 * request: { nickname, password, confirm }
 * response: { message }
 * tokenChecker
 */
router.post("/signup", auth.tokenChecker, User.signup);


/**
 * request: { nickname, password }
 * response: { message }    // header: { accessToken, refreshToken }
 * tokenChecker
 */
router.post("/login", auth.tokenChecker, User.singin);


export default router;