import { Request, Response, Application, Router } from "express";

import { GarantiaController } from '../controllers/Garantia.controller';

export class GarantiaRoutes {
    public garantiaController: GarantiaController =  new GarantiaController();

    public routes(app: Application): void {
        app.route("/garantias/test").get(this.garantiaController.test)
        app.route("/garantias").get(this.garantiaController.getAllGarantia)
    }
}
