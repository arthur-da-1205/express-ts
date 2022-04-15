import { Router, Request, Response } from "express";

import AuthController from "../controllers/AuthController";
import BaseRouter from "./BaseRouter";

class AuthRoutes extends BaseRouter {
  public routes = (): void => {
    this.router.post("login");
    this.router.post("register");
  };
}

export default new AuthRoutes().router;
