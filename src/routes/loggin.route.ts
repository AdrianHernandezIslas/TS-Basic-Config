import { Router } from "express";

import { logginUsuario,logginView } from "../controllers/loggin.controller";
import * as protectorDeRutas  from "../middlewares/loggin.middleware";



const logginRouter: Router = Router();


logginRouter.get("/signin",logginView);
logginRouter.post("/", logginUsuario);

export default logginRouter;