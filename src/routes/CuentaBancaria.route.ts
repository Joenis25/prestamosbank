import { Request, Response, Application, Router } from "express";

import { CuentaBancariaController } from '../controllers/CuentaBancaria.controller';

export class CuentaBancariaRoutes {
    public cuentaBancariaController: CuentaBancariaController =  new CuentaBancariaController();

    public routes(app: Application): void {
        app.route("/cuentas/test").get(this.cuentaBancariaController.test)
        app.route("/cuentas").get(this.cuentaBancariaController.getAllCuentaBancaria)
    }
}
