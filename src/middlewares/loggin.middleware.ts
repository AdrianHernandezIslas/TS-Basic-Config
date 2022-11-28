import { Request, Response, NextFunction } from "express";


export function createLogginMiddleware(rolUser:string){

    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.session.user) {
            return res.redirect("/api/v1/loggin/signin");
        }

        if(req.session.user.rol !== rolUser ){
            return res.send("si estas logeado pero no tienes permisos");
        }

        next();
    }

}