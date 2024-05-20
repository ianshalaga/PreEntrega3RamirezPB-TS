import { Request, Response, NextFunction } from "express";

function endpointAuth(rol: string) {
  return function (req: Request, res: Response, next: NextFunction) {
    if (req.session.user && rol === "user") {
      next();
    } else if (req.session.admin && rol === "admin") {
      next();
    } else {
      res.status(403).json({ message: "Unauthorized" });
    }
  };
}

export default endpointAuth;
