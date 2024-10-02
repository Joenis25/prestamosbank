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

    public async getOneAmortizacion(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const amortizacion = await Amortizacion.findByPk(id);

            if (amortizacion) {
                res.status(200).json({ amortizacion });
            } else {
                res.status(404).json({ message: 'amortizacion no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener la amortizacion', error });
        }
    }
    
    public async createAmortizacion(req: Request, res:Response){
        const {prestamoId,fecha, estado, monto} = req.body;

        try {
            let body:AmortizacionI = {
                prestamoId,
                fecha,
                estado,
                monto
            } 

            const amortizacion:AmortizacionI = await Amortizacion.create({...body});
            res.status(200).json({amortizacion});

        } catch (error) {

        }

    }

    public async updateAmortizacion(req: Request, res: Response) {
        const { id } = req.params;
        const { prestamoId,fecha, estado, monto} = req.body;
        try {
            const amortizacion = await Amortizacion.findByPk(id);

            if (amortizacion) {
                amortizacion.prestamoId = prestamoId;
                amortizacion.fecha = fecha;
                amortizacion.estado = estado;
                amortizacion.monto = monto;
                await amortizacion.save();

                res.status(200).json({amortizacion });
            } else {
                res.status(404).json({ message: 'Préstamo no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el préstamo', error });
        }
    }
    
    public async deleteAmortizacion(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const amortizacion = await Amortizacion.findOne({ where: { id } });

            if (amortizacion) {
                await amortizacion.destroy();
                res.status(200).json({ message: 'Préstamo eliminado con éxito' });
            } else {
                res.status(404).json({ message: 'Préstamo no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el préstamo', error });
        }
    }
    
}
