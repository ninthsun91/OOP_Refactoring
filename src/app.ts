import express, { Express } from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import env from "./config.env";
import router from "./api/routes/index";


class App {
    public app: Express;

    constructor() {
        this.app = express();
        this.middleware();
        this.testUrl();
        this.router();
    }

    public middleware() {
        this.app.use(express.json());
        this.app.use(cookieParser());
        this.app.use(session({
            resave: true,
            saveUninitialized: false,
            secret: env.SESSION_KEY,
            cookie: {
                httpOnly: true,
                secure: false,
            }
        }));
    }

    public router() {
        this.app.use("/", router);

        this.app.use((req, res, next)=>{
            const error = new Error("PAGE NOT FOUND");
            // res.status(404).send(error.message);
            res.status(404).json({ message: error.message });
        });
    }

    public testUrl() {
        this.app.get('/', (req, res)=>{
            console.log('success');
            res.status(200).send('success');
        });
    } 
}


export default new App();