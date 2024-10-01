import { Request, Response } from 'express';
import { Amortizacion, AmortizacionI } from '../models/Amortizacion';

export class AmortizacionController {

    // Método de prueba
    public async test(req: Request, res: Response) {
        try {
            res.send('Hola, método test para Amortizacion');
        } catch (error) {
        }
    }

    public async getAllAmortizacion(req: Request, res: Response) {
        try {
            const amortizacion: AmortizacionI[] = await Amortizacion.findAll(); // select * from amortizacions where activo = true;
            res.status(200).json({ amortizacion });
        } catch (error) {
        }
    }
    
}
