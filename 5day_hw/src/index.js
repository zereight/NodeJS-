import express from "express";
import globalRouter from "./router/router";
import path from "path";
import { localMiddleware } from "./middlewares";

const app = express();

app.set("view engine", "pug");
// Users/zereight/Desktop/dev/wetube_quiz/5day_hw/src
// src 폴더 안에 views폴더를 넣어도 동작함.
app.set("views", path.join(__dirname, "views"));
// console.log(__dirname);

app.use(localMiddleware);

app.use("/", globalRouter);

app.listen(4000, () => { console.log("Listening"); });