import { Request, Response, Application, Router } from "express";

import { ClienteController } from '../controllers/Cliente.controller';

export class ClienteRoutes {
    public clienteController: ClienteController =  new ClienteController();

    public routes(app: Application): void {
        app.route("/clientes/test").get(this.clienteController.test)
        app.route("/clientes").get(this.clienteController.getAllCliente)
        app.route("/cliente/:id").get(this.clienteController.getOneCliente)
        app.route("/clientes").post(this.clienteController.createCliente)
        app.route("/clientes/:id").patch(this.clienteController.updateCliente)
        app.route("/clientes/:id").delete(this.clienteController.deleteCliente)
    }
}
