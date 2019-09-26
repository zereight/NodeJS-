import express from "express";
import {
    documentation_controller,
    v1_controller,
    v2_controller,
    v1_buy_controller,
    v2_remove_controller,
    v2_edit_controller,
    v1_refund_controller
} from "./api_controller";

const apiRouter = express.Router();

apiRouter.get("/documentation", documentation_controller);
apiRouter.get("/v1", v1_controller);
apiRouter.get("/v1/buy", v1_buy_controller);
apiRouter.get("/v1/refund", v1_refund_controller);
apiRouter.get("/v2", v2_controller);
apiRouter.get("/v2/remove", v2_remove_controller);
apiRouter.get("/v2/edit", v2_edit_controller);

export default apiRouter;