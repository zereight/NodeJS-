import express from "express";
import { addRouter_home, addRouter_addMovie } from "./addController";

const addRouter = express.Router();

addRouter.get("/", addRouter_home);
addRouter.post("/upload", addRouter_addMovie);

export default addRouter;