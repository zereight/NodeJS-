import express from "express";

import global_router from "./global_router";
import coursesRouter from "./courses_router";
import apiRouter from "./api_router";



const app = express();



app.use("/", global_router);
app.use("/courses", coursesRouter);
app.use("/api", apiRouter);

app.listen(4000, () => { console.log("Listening!"); });