"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let dataUsers = [
    { id: 1, name: "Arthur" },
    { id: 2, name: "Darwanto" },
];
class UserController {
    constructor() {
        this.index = (req, res) => {
            return res.send(dataUsers);
        };
        this.create = (req, res) => {
            const { id, name } = req.body;
            dataUsers.push({ id, name });
            return res.send("Create Success!");
        };
        this.show = (req, res) => {
            const { id } = req.params;
            let person = dataUsers.find((item) => item.id == id);
            return res.send(person);
        };
        this.update = (req, res) => {
            const { id } = req.params;
            const { name } = req.body;
            let person = dataUsers.find((item) => item.id == id);
            person.name = name;
            return res.send("Update Success");
        };
        this.delete = (req, res) => {
            const { id } = req.params;
            let people = dataUsers.filter((item) => item.id != id);
            return res.send(people);
        };
    }
}
exports.default = new UserController();
