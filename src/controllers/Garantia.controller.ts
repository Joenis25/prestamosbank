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
            const garantia: GarantiaI[] = await Garantia.findAll(); // select * from prestamos where activo = true;
            res.status(200).json({ garantia });
        } catch (error) {
        }
    }

    public async getOneGarantia(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const garantia = await Garantia.findByPk(id);

            if (garantia) {
                res.status(200).json({ garantia });
            } else {
                res.status(404).json({ message: 'garantia no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener la garantia', error });
        }
    }
    
    public async createGarantia(req: Request, res:Response){
        const {prestamoId,tipoGarantia, valor, descripcion} = req.body;

        try {
            let body:GarantiaI = {
                prestamoId,
                tipoGarantia,
                valor,
                descripcion
            } 

            const garantia:GarantiaI = await Garantia.create({...body});
            res.status(200).json({garantia});

        } catch (error) {

        }

    }

    public async updateGarantia(req: Request, res: Response) {
        const { id } = req.params;
        const { prestamoId,tipoGarantia, valor, descripcion} = req.body;
        try {
            const garantia = await Garantia.findByPk(id);

            if (garantia) {
                garantia.prestamoId = prestamoId;
                garantia.tipoGarantia = tipoGarantia;
                garantia.valor = valor;
                garantia.descripcion = descripcion;
                await garantia.save();

                res.status(200).json({garantia });
            } else {
                res.status(404).json({ message: 'Préstamo no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el préstamo', error });
        }
    }
    
    public async deleteGarantia(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const garantia = await Garantia.findOne({ where: { id } });

            if (garantia) {
                await garantia.destroy();
                res.status(200).json({ message: 'Préstamo eliminado con éxito' });
            } else {
                res.status(404).json({ message: 'Préstamo no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el préstamo', error });
        }
    }
}
