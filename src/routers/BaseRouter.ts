import { Router } from "express";
import IRouter from "./RouterInterface";

abstract class BaseRouter implements IRouter {
  public router: Router;
  public routes = (): void => {};

  constructor() {
    this.router = Router();
    this.routes();
  }
}

export default BaseRouter;
