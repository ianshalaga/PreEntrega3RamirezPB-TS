import { Request, Response } from "express";
import { failureStatus, successStatus } from "../utils/statuses";
import { productsRoute } from "../utils/routes";
import CurrentUserDTO from "../dao/dto/currentUser.dto";

class SessionController {
  constructor() {}

  // @@@@
  async register(req: Request, res: Response) {
    res.status(201).json(successStatus);
  }

  // @@@@
  async registerFail(req: Request, res: Response) {
    console.log("error");
    res.json(failureStatus("Error al registrar el usuario."));
  }

  // @@@@
  async login(req: Request, res: Response) {
    if (!req.user)
      return res.status(400).json(failureStatus("Error de credenciales."));
    req.session.user = new CurrentUserDTO(req.user).currentUser;
    res.status(200).json(successStatus);
  }

  // @@@@
  async loginFail(req: Request, res: Response) {
    res.json(failureStatus("Login fail."));
  }

  // @@@@
  async logout(req: Request, res: Response) {
    req.session.destroy((error) => {
      if (!error) {
        res.json(successStatus);
      } else {
        res.json(failureStatus(error.message));
      }
    });
  }

  // @@@@
  async githubLogin(req: Request, res: Response) {}

  // @@@@
  async githubCallback(req: Request, res: Response) {
    req.session.user = new CurrentUserDTO(req.user).currentUser;
    res.redirect(productsRoute);
  }

  // @@@@
  async current(req: Request, res: Response) {
    if (req.session.user) {
      res.json(req.session.user);
    } else {
      res.json(failureStatus("No hay sessión."));
    }
  }
}

export default new SessionController();
