import { Request, Response } from "express";
import { isValidPassword } from "../libraries/bycript.library";
import { UsuarioModel } from "../models/usuario.model";
import UsuarioType from "../types/usuario.type";

declare module 'express-session' {
  interface SessionData {
    user: UsuarioType;
  }
}

export async function logginUsuario(req: Request, res: Response) {
    try {
      const { body } = req;
      const {correo,contrasenia} = body;
      const usuarioResponse = await UsuarioModel.findOne({where:{correo}});
      if(usuarioResponse !== null){
        const contraseniaUsuario = usuarioResponse.getDataValue("contrasenia");
        if(isValidPassword(contrasenia,contraseniaUsuario)){
          req.session.user = usuarioResponse.toJSON();
          res.status(201).json(usuarioResponse);
        }else{
          res.status(201).json({message:"invalid user"});
        }
      }
     
    } catch (error) {
      console.log(error);
      res.send("error")
    }
  }