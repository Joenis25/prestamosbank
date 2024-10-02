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
    
    public async getOneCuentaBancaria(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const cuentaBancaria = await CuentaBancaria.findByPk(id);

            if (cuentaBancaria) {
                res.status(200).json({ cuentaBancaria });
            } else {
                res.status(404).json({ message: 'cuentaBancaria no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener la cuentaBancaria', error });
        }
    }
    
    public async createCuentaBancaria(req: Request, res:Response){
        const {clienteId,numeroCuenta, tipoCuenta, saldo} = req.body;

        try {
            let body:CuentaBancariaI = {
                clienteId,
                numeroCuenta,
                tipoCuenta,
                saldo
            } 

            const cuentaBancaria:CuentaBancariaI = await CuentaBancaria.create({...body});
            res.status(200).json({cuentaBancaria});

        } catch (error) {

        }

    }

    public async updateCuentaBancaria(req: Request, res: Response) {
        const { id } = req.params;
        const { clienteId,numeroCuenta, tipoCuenta, saldo} = req.body;
        try {
            const cuentaBancaria = await CuentaBancaria.findByPk(id);

            if (cuentaBancaria) {
                cuentaBancaria.clienteId = clienteId;
                cuentaBancaria.numeroCuenta = numeroCuenta;
                cuentaBancaria.tipoCuenta = tipoCuenta;
                cuentaBancaria.saldo = saldo;
                await cuentaBancaria.save();

                res.status(200).json({cuentaBancaria });
            } else {
                res.status(404).json({ message: 'Préstamo no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el préstamo', error });
        }
    }
    
    public async deleteCuentaBancaria(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const cuentaBancaria = await CuentaBancaria.findOne({ where: { id } });

            if (cuentaBancaria) {
                await cuentaBancaria.destroy();
                res.status(200).json({ message: 'Préstamo eliminado con éxito' });
            } else {
                res.status(404).json({ message: 'Préstamo no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el préstamo', error });
        }
    }
}
