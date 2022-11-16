import { Request, Response } from "express";
import path from "path";

export function sendFile(req: Request, res: Response) {
  const { query } = req;
  const file = query.filePath as string;
  res
    //.setHeader("Content-Type", "application/zip")
    //.setHeader("Content-Disposition", `attachment; filename=file${path.extname(file)}`)
    .sendFile(path.join(__dirname, "..", "..", file));
}
