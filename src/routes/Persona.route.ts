import { Request, Response, Application, Router } from "express";

import { PersonaController } from '../controllers/Persona.controller';

export class PersonaRoutes {
    public personaController: PersonaController =  new PersonaController();

    public routes(app: Application): void {
        app.route("/personas/test").get(this.personaController.test)
        app.route("/personas").get(this.personaController.getAllPersona)
    }
}
