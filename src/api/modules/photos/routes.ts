import { Router, NextFunction, Request, Response } from "express";

export const register = (app: Router) => {
  app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.json({ msg: "ok" });
  });
  return app;
};
