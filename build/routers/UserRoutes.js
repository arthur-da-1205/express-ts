"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const AuthMiddlewares_1 = require("../middlewares/AuthMiddlewares");
class UserRoutes {
    constructor() {
        this.routes = () => {
            this.router.get("/", AuthMiddlewares_1.auth, UserController_1.default.index);
            this.router.post("/", UserController_1.default.create);
            this.router.get("/:id", UserController_1.default.show);
            this.router.put("/:id", UserController_1.default.update);
            this.router.delete("/:id", UserController_1.default.delete);
        };
        this.router = (0, express_1.Router)();
        this.routes();
    }
}
exports.default = new UserRoutes().router;
