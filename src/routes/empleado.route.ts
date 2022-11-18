import {Router} from "express";
import { indexViewEmpleado,createEmpleado,readEmpleado,updateEmpleado,deleteEmpleado } from "../controllers/empleado.controller";


const empleadoRouter: Router = Router();

empleadoRouter.get("/view", indexViewEmpleado);
empleadoRouter.get("/", readEmpleado);
empleadoRouter.post("/", createEmpleado);
empleadoRouter.post("/update/:idEmpleado", updateEmpleado);
empleadoRouter.delete("/:idEmpleado",deleteEmpleado);



export default empleadoRouter;
