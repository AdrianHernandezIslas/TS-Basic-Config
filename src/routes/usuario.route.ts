import { Router } from "express";
import { createUsuario } from "../controllers/usuario.controller";
import {
  cifrarContraseniaUsuarioMiddleware,
  createContraseniaUsuarioMiddleware,
} from "../middlewares/usuario.middleware";

const usuarioRouter: Router = Router();

usuarioRouter.post(
  "/",
  createContraseniaUsuarioMiddleware,
  cifrarContraseniaUsuarioMiddleware,
  createUsuario
);

export default usuarioRouter;
