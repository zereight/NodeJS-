import express from "express";
import { global_controller, login_controller, photos_controller, profile_controller } from "../controller/controller";

const globalRouter = express.Router();

globalRouter.get("/", global_controller);
globalRouter.get("/login", login_controller);
globalRouter.get("/photos", photos_controller);
globalRouter.get("/profile", profile_controller);

export default globalRouter;