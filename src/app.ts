import express, { Application } from "express";
import morgan from "morgan";
import path from "path";
//import dotenv from "dotenv";
//dotenv.config();

import {sessionConfig, sessionMiddleware} from "./middlewares/express-session.middleware";

import indexRouter from "./routes/index.route";
import productoRouter from "./routes/producto.route";
import fileRoute from "./routes/file.route";
import usuarioRouter from "./routes/usuario.route";
import empleadoRouter from "./routes/empleado.route";
import logginRouter from "./routes/loggin.route";

const app: Application = express();

//settings
app.set("port", process.env.PORT || 4000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./public")));
app.use(sessionConfig);
app.use(sessionMiddleware);

//routes
app.use("/", indexRouter);
app.use("/api/v1/file", fileRoute);
app.use("/api/v1/loggin", logginRouter);
app.use("/catalogo/producto", productoRouter);
app.use("/catalogo/empleado", empleadoRouter);
app.use("/catalogo/usuario", usuarioRouter);

export default app;
