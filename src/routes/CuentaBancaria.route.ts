import { Request, Response, Application, Router } from "express";

import { CuentaBancariaController } from '../controllers/CuentaBancaria.controller';

export class CuentaBancariaRoutes {
    public cuentaBancariaController: CuentaBancariaController =  new CuentaBancariaController();

    public routes(app: Application): void {
        app.route("/cuentas/test").get(this.cuentaBancariaController.test)
        app.route("/cuentas").get(this.cuentaBancariaController.getAllCuentaBancaria)
        app.route("/cuentas/:id").get(this.cuentaBancariaController.getOneCuentaBancaria)
        app.route("/cuentas").post(this.cuentaBancariaController.createCuentaBancaria)
        app.route("/cuentas/:id").patch(this.cuentaBancariaController.updateCuentaBancaria)
        app.route("/cuentas/:id").delete(this.cuentaBancariaController.deleteCuentaBancaria)
    }
}
