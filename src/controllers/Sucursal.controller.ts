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
    
    public async getOneSucursal(req: Request, res:Response){
        const { id} = req.params

        try {
            const sucursal = await Sucursal.findByPk(id)
            if (sucursal){
                res.status(200).json({sucursal})
            } else return  res.status(300).json({msg: "La Sucursal no existe"})

        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }
    
    public async createSucursal(req: Request, res:Response){
        const {
            nombre,
            direccion,
            telefono
        } = req.body;

        try {
            let body:SucursalI = {
                nombre,
                direccion,
                telefono
            } 

            const sucursal:SucursalI = await Sucursal.create({...body});
            res.status(200).json({sucursal});

        } catch (error) {

        }

    }
    public async updateSucursal(req: Request, res:Response){
        const { id:pk } = req.params;

        const {
            id,
            nombre,
            direccion,
            telefono,
        }= req.body

        try {
            let body:SucursalI = {
                nombre,
                direccion,
                telefono,
            } 

            const sucursalExist: SucursalI | null = await Sucursal.findByPk(pk);
            // const userExist: UsuarioI | null = await Usuario.findOne(
            //     {
            //         where: { id: pk}
            //     }
            // );

            if(!sucursalExist) return res.status(500).json({msg:"El Sucursal No existe"})
            await Sucursal.update(
                body,{
                    where: {id:pk}
                }
            );  // select update from usuarios where id=pk



        } catch (error) {

        }
        const sucursal: SucursalI | null = await Sucursal.findByPk(pk);
        if(sucursal) return res.status(200).json({sucursal})

    }
    
    public async deleteSucursal(req: Request, res:Response){
        const { id:pk } = req.params;


        try {
            const sucursalExist: SucursalI | null = await Sucursal.findByPk(pk);
            if(!sucursalExist) return res.status(500).json({msg:"La Sucursal No existe"})
            await Sucursal.destroy(
                {
                    where: {id: pk}
                }
            )
            res.status(200).json({msg:"Sucursal Eliminada"})
        } catch (error) {

        }

    }
}
