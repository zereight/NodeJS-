import express from "express";
import path from "path";
import bodyParser from "body-parser";
import multer from "multer";
import fs from "fs";
import homeRouter from "./router/home";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.use("/", homeRouter);

// Codesanbox does not need PORT :)
app.listen(4000, () => console.log(`Listening!`));