import express from "express";
import { homeController, movieDetail, postCreateMovie, getCreateMovie, getEditMovie_controller, postEditMovie_controller, deleteMovie_controller, getSearch_controller } from "./movieController";

const movieRouter = express.Router();

// Add your magic here!
movieRouter.get("/", homeController);

movieRouter.get("/create", getCreateMovie);
movieRouter.post("/create", postCreateMovie);

movieRouter.get("/search", getSearch_controller);
// movieRouter.post("/search", postSearch_controller);
movieRouter.get("/:id/edit", getEditMovie_controller);
movieRouter.post("/:id/edit", postEditMovie_controller);
movieRouter.get("/:id/delete", deleteMovie_controller);
movieRouter.get("/:id", movieDetail);



export default movieRouter;
