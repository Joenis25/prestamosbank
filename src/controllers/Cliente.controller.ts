import { Request, Response } from 'express';
import { Cliente, ClienteI } from '../models/Cliente';

export class ClienteController {

    // Método de prueba
    public async test(req: Request, res: Response) {
        try {
            res.send('Hola, método test para Cliente');
        } catch (error) {
        }
    }

    // Obtener todas las clientes activas
    public async getAllCliente(req: Request, res: Response) {
        try {
            const clientes: ClienteI[] = await Cliente.findAll(); // select * from clientes where activo = true;
            res.status(200).json({ clientes });
        } catch (error) {
        }
    }
    
    // Crear una nueva cliente
    /* public async createCliente(req: Request, res: Response) {
        try {
            const newCliente: ClienteI = req.body;
            const cliente = await Cliente.create(newCliente);
            res.status(201).json(cliente);
        } catch (error) {
            res.status(500).send(error.message);
        }
    } */
}
