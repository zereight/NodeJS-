import express from "express";
import path from "path";
import "./db";
import movieRouter from "./movieRouter";

const app = express();

const local_middleware = (req, res, next) => {
    res.locals.siteName = " | Nomad coder";
    next();
};

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(local_middleware);
app.use("/", movieRouter);

// Codesanbox does not need PORT :)
app.listen(4000, () => console.log(`✅  Server Ready!`));