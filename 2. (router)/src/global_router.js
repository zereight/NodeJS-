import express from "express";
import {
    home_controller,
    join_controller,
    login_controller,
    confirm_account_controller,
    courses_controller,
    api_controller
} from "./global_controller";

const global_router = express.Router();

global_router.get("/", home_controller);
global_router.get("/join", join_controller);
global_router.get("/login", login_controller);
global_router.get("/confirm-account", confirm_account_controller);
global_router.get("/courses", courses_controller);
global_router.get("/api", api_controller);

export default global_router;