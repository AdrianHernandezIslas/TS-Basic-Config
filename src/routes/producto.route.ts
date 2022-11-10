import {Router} from "express";
import { indexViewPoducto,createProducto } from "../controllers/producto.controller";
import storageMulter from "../middlewares/multer.middleware";

const productoRouter: Router = Router();

productoRouter.get("/view", indexViewPoducto);
productoRouter.post("/",storageMulter.single("imagen"), createProducto);


export default productoRouter;
