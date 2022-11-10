import { Request, Response } from "express";

export function indexViewPoducto(req: Request, res: Response) {
  return res.render("producto/producto-view");
}

export function createProducto(req: Request, res: Response) {
  console.log(req.body)
  console.log(req.file);
  res.send("ok");
}