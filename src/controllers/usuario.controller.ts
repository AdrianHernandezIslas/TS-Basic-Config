import { Request, Response } from "express";
import { UsuarioModel } from "../models/usuario.model";

export async function createUsuario(req: Request, res: Response) {
  try {
    const { body } = req;
    const usuarioResponse = await UsuarioModel.create(body, { raw: true });
    res.status(201).json(usuarioResponse);
  } catch (error) {
    console.log(error);
  }
}
