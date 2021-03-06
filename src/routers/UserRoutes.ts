import { Router, Request, Response } from "express";
import UserController from "../controllers/UserController";
import IRouter from "./RouterInterface";

class UserRoutes implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }
  public routes = (): void => {
    this.router.get("/", UserController.index);
    this.router.post("/", UserController.create);
    this.router.get("/:id", UserController.show);
    this.router.put("/:id", UserController.update);
    this.router.delete("/:id", UserController.delete);
  };
}

export default new UserRoutes().router;
