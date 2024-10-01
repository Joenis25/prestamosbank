import { Request, Response } from 'express';
import { Persona, PersonaI } from '../models/Persona';

export class PersonaController {

    // Método de prueba
    public async test(req: Request, res: Response) {
        try {
            res.send('Hola, método test para Persona');
        } catch (error) {
        }
    }

    // Obtener todas las personas activas
    public async getAllPersona(req: Request, res: Response) {
        try {
            const personas: PersonaI[] = await Persona.findAll(); // select * from personas where activo = true;
            res.status(200).json({ personas });
        } catch (error) {
        }
    }
    
    // Crear una nueva persona
    /* public async createPersona(req: Request, res: Response) {
        try {
            const newPersona: PersonaI = req.body;
            const persona = await Persona.create(newPersona);
            res.status(201).json(persona);
        } catch (error) {
            res.status(500).send(error.message);
        }
    } */
}
