import { Request, Response } from "express";

export function indexResponse(req: Request, res: Response) {
  if (req.session.user) {
    const data = { title: "Programacion web" };
    return res.render("index-view");
  }else{
    return res.redirect("/api/v1/loggin/signin");
  }
}
