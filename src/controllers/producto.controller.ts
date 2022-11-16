import { Request, Response } from "express";
import { ProductoModel } from "../models/producto.model";

export async function indexViewPoducto(req: Request, res: Response) {
  const productos = await ProductoModel.findAll({raw:true})
  return res.render("producto/producto-view",{productos});
}

export async function createProducto(req: Request, res: Response) {
  try {
    const { body, file } = req;
    body["url_imagen"] = file?.path;
    const productResponse = await ProductoModel.create(body, { raw: true });
    res.status(201).json(productResponse);
  } catch (error) {
    console.log(error);
  }
}
