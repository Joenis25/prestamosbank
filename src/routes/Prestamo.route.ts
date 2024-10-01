import { Request, Response, Application, Router } from "express";

import { PrestamoController } from '../controllers/Prestamo.controller';

export class PrestamoRoutes {
    public prestamoController: PrestamoController =  new PrestamoController();

    public routes(app: Application): void {
        app.route("/prestamos/test").get(this.prestamoController.test)
        app.route("/prestamos").get(this.prestamoController.getAllPrestamo)
    }
}
