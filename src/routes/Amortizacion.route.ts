import { Request, Response, Application, Router } from "express";

import { AmortizacionController } from '../controllers/Amortizacion.controller';

export class AmortizacionRoutes {
    public amortizacionController: AmortizacionController =  new AmortizacionController();

    public routes(app: Application): void {
        app.route("/amortizaciones/test").get(this.amortizacionController.test)
        app.route("/amortizaciones").get(this.amortizacionController.getAllAmortizacion)
        app.route("/amortizaciones/:id").get(this.amortizacionController.getOneAmortizacion)
        app.route("/amortizaciones").post(this.amortizacionController.createAmortizacion)
        app.route("/amortizaciones/:id").patch(this.amortizacionController.updateAmortizacion)
        app.route("/amortizaciones/:id").delete(this.amortizacionController.deleteAmortizacion)
    }
}
