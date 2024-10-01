import { Request, Response } from 'express';
import { Empleado, EmpleadoI } from '../models/Empleado';
import { Persona } from '../models/Persona';
import { Sucursal } from '../models/Sucursal';

export class EmpleadoController {

    // Método de prueba
    public async test(req: Request, res: Response) {
        try {
            res.send('Hola, método test para Empleado');
        } catch (error) {
            res.status(500).json({ message: 'Error en el método test', error });
        }
    }

    // Obtener todos los empleados
    public async getAllEmpleado(req: Request, res: Response) {
        try {
            const empleados: EmpleadoI[] = await Empleado.findAll({
                include: [
                    { model: Persona, as: 'persona' },  // Incluye los datos de Persona
                    { model: Sucursal, as: 'sucursal' } // Incluye los datos de Sucursal
                ]
            });
            res.status(200).json({ empleados });
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener empleados', error });
        }
    }

    // Obtener un empleado por ID
    public async getEmpleadoById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const empleado = await Empleado.findByPk(id, {
                include: [
                    { model: Persona, as: 'persona' },
                    { model: Sucursal, as: 'sucursal' }
                ]
            });

            if (empleado) {
                res.status(200).json({ empleado });
            } else {
                res.status(404).json({ message: 'Empleado no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener empleado', error });
        }
    }

    // Crear un nuevo empleado
    public async createEmpleado(req: Request, res: Response) {
        const { personaId, sucursalId } = req.body;
        try {
            const newEmpleado = await Empleado.create({
                personaId,
                sucursalId
            });
            res.status(201).json({ message: 'Empleado creado con éxito', empleado: newEmpleado });
        } catch (error) {
            res.status(500).json({ message: 'Error al crear empleado', error });
        }
    }

    // Actualizar un empleado
    public async updateEmpleado(req: Request, res: Response) {
        const { id } = req.params;
        const { personaId, sucursalId } = req.body;
        try {
            const empleado = await Empleado.findByPk(id);

            if (empleado) {
                empleado.personaId = personaId;
                empleado.sucursalId = sucursalId;
                await empleado.save();
                res.status(200).json({ message: 'Empleado actualizado con éxito', empleado });
            } else {
                res.status(404).json({ message: 'Empleado no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar empleado', error });
        }
    }

    // Eliminar un empleado
    public async deleteEmpleado(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const empleado = await Empleado.findByPk(id);

            if (empleado) {
                await empleado.destroy();
                res.status(200).json({ message: 'Empleado eliminado con éxito' });
            } else {
                res.status(404).json({ message: 'Empleado no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar empleado', error });
        }
    }
}
