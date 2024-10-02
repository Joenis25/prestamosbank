import { Request, Response, Application, Router } from "express";

import { SucursalController } from '../controllers/Sucursal.controller';

export class SucursalRoutes {
    public sucursalController: SucursalController =  new SucursalController();

    public routes(app: Application): void {
        app.route("/sucursales/test").get(this.sucursalController.test)
        app.route("/sucursales").get(this.sucursalController.getAllSucursal)
        app.route("/sucursales/:id").get(this.sucursalController.getOneSucursal)
        app.route("/sucursales").post(this.sucursalController.createSucursal)
        app.route("/sucursales/:id").patch(this.sucursalController.updateSucursal)
        app.route("/sucursales/:id").delete(this.sucursalController.deleteSucursal)
    }
}
