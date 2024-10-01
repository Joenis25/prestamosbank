import { Request, Response, Application, Router } from "express";

import { PrestamoController } from '../controllers/Prestamo.controller';

export class PrestamoRoutes {
    public prestamoController: PrestamoController =  new PrestamoController();

    public routes(app: Application): void {
        app.route("/prestamos/test").get(this.prestamoController.test)
        app.route("/prestamos").get(this.prestamoController.getAllPrestamo)
        app.route("/prestamos/:id").get(this.prestamoController.getOnePrestamo)
        app.route("/prestamos").post(this.prestamoController.createPrestamo)
        app.route("/prestamos").patch(this.prestamoController.updatePrestamo)
        app.route("/prestamos").delete(this.prestamoController.deletePrestamo)
    }
}
