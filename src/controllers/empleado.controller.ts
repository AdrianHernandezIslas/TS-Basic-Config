import { Request, Response } from "express";
import { EmpleadoModel } from "../models/empleado.model";

export async function indexViewEmpleado(req: Request, res: Response) {
  return res.render("empleado/empleado-view");
}

export async function readEmpleado(req: Request, res: Response) {
  const {query:where} = req
  const empleados = await EmpleadoModel.findAll({
    raw: true,
    where
  });
  res.status(200).json(empleados);
}

export async function createEmpleado(req: Request, res: Response) {
  try {
    const { body} = req;
    const productResponse = await EmpleadoModel.create(body, { raw: true });
    res.status(201).json(productResponse);
  } catch (error) {
    console.log(error);
  }
}

export async function updateEmpleado(req: Request, res: Response) {
  const {idEmpleado} = req.params;
  const {body} = req;
  const entity = await EmpleadoModel.findByPk(idEmpleado);
  await entity?.update(body);
  res.status(201).json(entity?.toJSON());
}

export async function deleteEmpleado(req: Request, res: Response) {
  const {idEmpleado} = req.params;
  const entity = await EmpleadoModel.findByPk(idEmpleado);
  await entity?.destroy();
  res.status(204).json({ok:""});
}

