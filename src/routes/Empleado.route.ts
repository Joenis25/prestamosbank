import { Request, Response, Application, Router } from "express";

import { EmpleadoController } from '../controllers/Empleado.controller';

export class EmpleadoRoutes {
    public empleadoController: EmpleadoController =  new EmpleadoController();

    public routes(app: Application): void {
        app.route("/empleados/test").get(this.empleadoController.test)
        app.route("/empleados").get(this.empleadoController.getAllEmpleado)
        app.route("/empleados/:id").get(this.empleadoController.getOneEmpleado)
        app.route("/empleados").post(this.empleadoController.createEmpleado)
        app.route("/empleados/:id").patch(this.empleadoController.updateEmpleado)
        app.route("/empleados/:id").delete(this.empleadoController.deleteEmpleado)
    }
}
