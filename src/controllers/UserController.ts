import { Request, Response } from "express";
import IController from "./ControllerInterface";

let dataUsers: any[] = [
  { id: 1, name: "Arthur" },
  { id: 2, name: "Darwanto" },
];

class UserController implements IController {
  index = (req: Request, res: Response): Response => {
    return res.send(dataUsers);
  };

  create = (req: Request, res: Response): Response => {
    const { id, name } = req.body;

    dataUsers.push({ id, name });

    return res.send("Create Success!");
  };

  show = (req: Request, res: Response): Response => {
    const { id } = req.params;

    let person = dataUsers.find((item) => item.id == id);

    return res.send(person);
  };

  update = (req: Request, res: Response): Response => {
    const { id } = req.params;
    const { name } = req.body;

    let person = dataUsers.find((item) => item.id == id);
    person.name = name;

    return res.send("Update Success");
  };

  delete = (req: Request, res: Response): Response => {
    const { id } = req.params;

    let people = dataUsers.filter((item) => item.id != id);

    return res.send(people);
  };
}

export default new UserController();
