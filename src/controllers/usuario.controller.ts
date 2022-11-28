import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { UsuarioModel } from "../models/usuario.model";
import * as authService from "../services/auth.service";

export async function createUsuario(req: Request, res: Response) {
  try {
    const { body } = req;
    const contraseniaUnhash = body["contraseniaUnhash"];
    delete body.contraseniaUnhash;
    const usuarioResponse = await UsuarioModel.create(body, { raw: true });
    const mail = usuarioResponse.getDataValue("correo");
    await authService.sendUserCredentials({
      mail,
      data: { correo: mail, contrasenia: contraseniaUnhash },
    });
    res.status(StatusCodes.CREATED).json(usuarioResponse);
  } catch (e) {
    const error = e as Error;
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ nameError: error.name, detail: error.message });
  }
}
