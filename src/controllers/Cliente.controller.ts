import { Request, Response } from 'express';
import { Cliente, ClienteI } from '../models/Cliente';
import { Persona } from '../models/Persona';

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
            const clientes: ClienteI[] = await Cliente.findAll({
                include: [
                    { model: Persona, as: 'persona' },  // Incluye los datos de Persona
                ]
            }); // select * from clientes where activo = true;
            res.status(200).json({ clientes });
        } catch (error) {
        }
    }

    public async getOneCliente(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const clientes = await Cliente.findByPk(id, {
                include: [
                    { model: Persona, as: 'persona' },  // Incluye los datos de Persona
                ]
            });

            if (clientes) {
                res.status(200).json({ clientes });
            } else {
                res.status(404).json({ message: 'Cliente no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener el cliente', error });
        }
    }
    
    public async createCliente(req: Request, res:Response){
        const {personaId,contrato} = req.body;

        try {
            let body:ClienteI = {
                personaId,
                contrato
            } 

            const clientes:ClienteI = await Cliente.create({...body});
            res.status(200).json({clientes});

        } catch (error) {

        }

    }

    public async updateCliente(req: Request, res: Response) {
        const { id } = req.params;
        const { personaId,contrato} = req.body;
        try {
            const cliente = await Cliente.findByPk(id);

            if (cliente) {
                cliente.personaId = personaId;
                cliente.contrato = contrato;
                await cliente.save();

                res.status(200).json({cliente });
            } else {
                res.status(404).json({ message: 'Préstamo no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el préstamo', error });
        }
    }
    
    public async deleteCliente(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const cliente = await Cliente.findOne({ where: { id } });

            if (cliente) {
                await cliente.destroy();
                res.status(200).json({ message: 'Préstamo eliminado con éxito' });
            } else {
                res.status(404).json({ message: 'Préstamo no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el préstamo', error });
        }
    }
}
