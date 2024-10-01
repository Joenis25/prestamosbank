import { Request, Response } from 'express';
import { Sucursal, SucursalI } from '../models/Sucursal';

export class SucursalController {

    // Método de prueba
    public async test(req: Request, res: Response) {
        try {
            res.send('Hola, método test para Sucursal');
        } catch (error) {
        }
    }

    // Obtener todas las sucursales activas
    public async getAllSucursal(req: Request, res: Response) {
        try {
            const sucursal: SucursalI[] = await Sucursal.findAll(); // select * from sucursales where activo = true;
            res.status(200).json({ sucursal });
        } catch (error) {
        }
    }
    
  /*   // Crear una nueva sucursal
    public async createSucursal(req: Request, res: Response) {
        try {
            const newSucursal: SucursalI = req.body;
            const sucursal = await Sucursal.create(newSucursal);
            res.status(201).json(sucursal);
        } catch (error) {
        }
    } */
}
