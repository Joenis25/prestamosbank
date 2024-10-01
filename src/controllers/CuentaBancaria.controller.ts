import { Request, Response } from 'express';
import { CuentaBancaria, CuentaBancariaI } from '../models/CuentaBancaria';

export class CuentaBancariaController {

    // Método de prueba
    public async test(req: Request, res: Response) {
        try {
            res.send('Hola, método test para CuentaBancaria');
        } catch (error) {
        }
    }

    // Obtener todas las cuentaBancarias activas
    public async getAllCuentaBancaria(req: Request, res: Response) {
        try {
            const cuentaBancaria: CuentaBancariaI[] = await CuentaBancaria.findAll(); // select * from cuentaBancarias where activo = true;
            res.status(200).json({ cuentaBancaria});
        } catch (error) {
        }
    }
    
    // Crear una nueva cuentaBancaria
    /* public async createCuentaBancaria(req: Request, res: Response) {
        try {
            const newCuentaBancaria: CuentaBancariaI = req.body;
            const cuentaBancaria = await CuentaBancaria.create(newCuentaBancaria);
            res.status(201).json(cuentaBancaria);
        } catch (error) {
            res.status(500).send(error.message);
        }
    } */
}
