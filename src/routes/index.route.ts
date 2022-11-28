import {Router} from "express";
import { indexResponse } from "../controllers/index.controller";
import { createLogginMiddleware } from "../middlewares/loggin.middleware";

const protegerRutaFuncion = createLogginMiddleware("1110");
const indexRouter: Router = Router();

indexRouter.get("/",protegerRutaFuncion,indexResponse);

export default indexRouter;
