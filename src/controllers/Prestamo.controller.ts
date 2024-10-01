import { Request, Response } from 'express';
import { Prestamo, PrestamoI } from '../models/Prestamo';

export class PrestamoController {

    // Método de prueba
    public async test(req: Request, res: Response) {
        try {
            res.send('Hola, método test para Prestamo');
        } catch (error) {
            res.status(500).json({ message: 'Error en el método test', error });
        }
    }

    // Obtener todos los prestamos
    public async getAllPrestamo(req: Request, res: Response) {
        try {
            const prestamos: PrestamoI[] = await Prestamo.findAll(); // select * from prestamos;
            res.status(200).json({ prestamos });
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener prestamos', error });
        }
    }

    // Obtener un prestamo por ID
    public async getOnePrestamo(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const prestamo = await Prestamo.findByPk(id);

            if (prestamo) {
                res.status(200).json({ prestamo });
            } else {
                res.status(404).json({ message: 'Préstamo no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener el préstamo', error });
        }
    }

    // Crear un nuevo prestamo
    public async createPrestamo(req: Request, res: Response) {
        const { clienteId, empleadoId, fechaPrestamo, tipoPrestamo, monto, interes, estado } = req.body;
        try {
            const newPrestamo = await Prestamo.create({
                clienteId,
                empleadoId,
                fechaPrestamo,
                tipoPrestamo,
                monto,
                interes,
                estado
            });
            res.status(201).json({ message: 'Préstamo creado con éxito', prestamo: newPrestamo });
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el préstamo', error });
        }
    }

    // Actualizar un prestamo
    public async updatePrestamo(req: Request, res: Response) {
        const { id } = req.params;
        const { clienteId, empleadoId, fechaPrestamo, tipoPrestamo, monto, interes, estado } = req.body;
        try {
            const prestamo = await Prestamo.findByPk(id);

            if (prestamo) {
                prestamo.clienteId = clienteId;
                prestamo.empleadoId = empleadoId;
                prestamo.fechaPrestamo = fechaPrestamo;
                prestamo.tipoPrestamo = tipoPrestamo;
                prestamo.monto = monto;
                prestamo.interes = interes;
                prestamo.estado = estado;
                await prestamo.save();

                res.status(200).json({ message: 'Préstamo actualizado con éxito', prestamo });
            } else {
                res.status(404).json({ message: 'Préstamo no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el préstamo', error });
        }
    }

    // Eliminar un prestamo
    public async deletePrestamo(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const prestamo = await Prestamo.findByPk(id);

            if (prestamo) {
                await prestamo.destroy();
                res.status(200).json({ message: 'Préstamo eliminado con éxito' });
            } else {
                res.status(404).json({ message: 'Préstamo no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el préstamo', error });
        }
    }
}
