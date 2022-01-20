import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev");

// View engine Pug to render client
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

// Middleware Morgan : display method and status
app.use(logger);
// Middleware to allow access to req.body
app.use(express.urlencoded({ extended: true }));
// Middleware to send cookie to browser
app.use(
  session({
    secret: "Hello!",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: "mongodb://127.0.0.1:27017/wetube" }),
  })
);

app.use(localsMiddleware);

// Connection to routers
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
