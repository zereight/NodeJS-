import express from "express";
import { homeController, getConvertController, postConvertController } from "../controller/homeController";
import { uploadTXT } from "../middleware";

const homeRouter = express.Router();

homeRouter.get( "/", homeController );
homeRouter.get( "/read", getConvertController );
homeRouter.post("/read", uploadTXT ,postConvertController );


export default homeRouter;