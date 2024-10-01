import { Request, Response } from 'express';
import { Garantia, GarantiaI } from '../models/Garantia';

export class GarantiaController {

    // Método de prueba
    public async test(req: Request, res: Response) {
        try {
            res.send('Hola, método test para Garantia');
        } catch (error) {
        }
    }

    public async getAllGarantia(req: Request, res: Response) {
        try {
            const prestamos: GarantiaI[] = await Garantia.findAll(); // select * from prestamos where activo = true;
            res.status(200).json({ prestamos });
        } catch (error) {
        }
    }
}
