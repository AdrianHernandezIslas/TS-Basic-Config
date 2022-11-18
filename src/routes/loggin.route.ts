import { Router } from "express";
import { logginUsuario } from "../controllers/loggin.controller";



const logginRouter: Router = Router();

logginRouter.post("/", logginUsuario);

export default logginRouter;