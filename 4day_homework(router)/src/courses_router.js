import express from "express";
import { view_controller, mine_controller } from "./courses_controller";

const coursesRouter = express.Router();

coursesRouter.get("/view", view_controller);
coursesRouter.get("/mine", mine_controller);

export default coursesRouter;