import { Request, Response } from 'express';
import { Persona, PersonaI } from '../models/Persona';
import { where } from 'sequelize';

export class PersonaController {

    // Método de prueba
    public async test(req: Request, res: Response) {
        try {
            res.send('Hola, método test para Persona');
        } catch (error) {
        }
    }

    // Obtener todas las personas activas
    public async getAllPersona(req: Request, res: Response) {
        try {
            const persona: PersonaI[] = await Persona.findAll(); // select * from personas where activo = true;
            res.status(200).json({ persona });
        } catch (error) {
        }
    }
   /*  public async getOnePersona(req: Request, res:Response){
        const { id: idParam } = req.params

        try {
            const persona:PersonaI | null = await Persona.findOne(
                {
                    where: { 
                        id: idParam,
                    }
                }
            )
            if (persona){
                res.status(200).json({persona})
            } else return  res.status(300).json({msg: "La Persona no existe"})

        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    } */

    public async getOnePersona(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const persona = await Persona.findByPk(id);

            if (persona) {
                res.status(200).json({ persona });
            } else {
                res.status(404).json({ message: 'Préstamo no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener el préstamo', error });
        }
    }
    public async createPersona(req: Request, res:Response){
        const {
            nombre,
            apellido,
            direccion,
            correo,
            telefono
        } = req.body;

        try {
            let body:PersonaI = {
                nombre,
                apellido,
                direccion,
                correo,
                telefono
            } 

            const persona:PersonaI = await Persona.create({...body});
            res.status(200).json({persona});

        } catch (error) {

        }

    }
/*     public async updatePersona(req: Request, res:Response){
        const { id:pk } = req.params;

        const {
            id,
            nombre,
            apellido,
            direccion,
            correo,
            telefono
        }= req.body

        try {
            let body:PersonaI = {
                nombre,
                apellido,
                direccion,
                correo,
                telefono
            } 

            const personaExist: PersonaI | null = await Persona.findByPk(pk);
            // const userExist: UsuarioI | null = await Usuario.findOne(
            //     {
            //         where: { id: pk}
            //     }
            // );

            if(!personaExist) return res.status(500).json({msg:"El Persona No existe"})
            await Persona.update(
                body,{
                    where: {id:pk}
                }
            );  // select update from usuarios where id=pk



        } catch (error) {

        }
        const persona: PersonaI | null = await Persona.findByPk(pk);
        if(persona) return res.status(200).json({persona})
    } */

   /*  public async updatePersona(req: Request, res: Response) {
        const { id: pk } = req.params;
        const { nombre, apellido, direccion, correo, telefono } = req.body;
    
        try {
            let body: PersonaI = { nombre, apellido, direccion, correo, telefono };
    
            const personaExist: PersonaI | null = await Persona.findByPk(pk);
    
            if (!personaExist) {
                return res.status(404).json({ msg: "El Persona no existe" });
            }
    
            await Persona.update(body, { where: { id: pk } });
    
            const persona: PersonaI | null = await Persona.findByPk(pk);
            if (persona) {
                return res.status(200).json({ persona });
            }
        } catch (error) {
            // Envía respuesta en caso de error
            return res.status(500).json({ msg: "Error al actualizar persona", error });
        }
    } */
    
        public async updatePersona(req: Request, res: Response) {
            const { id } = req.params;
            const { nombre, apellido, direccion, correo, telefono} = req.body;
            try {
                const persona = await Persona.findByPk(id);
    
                if (persona) {
                    persona.nombre = nombre;
                    persona.apellido = apellido;
                    persona.direccion = direccion;
                    persona.correo = correo;
                    persona.telefono = telefono;
                    await persona.save();
    
                    res.status(200).json({persona });
                } else {
                    res.status(404).json({ message: 'Préstamo no encontrado' });
                }
            } catch (error) {
                res.status(500).json({ message: 'Error al actualizar el préstamo', error });
            }
        }

    /* public async deletePersona(req: Request, res:Response){
        const { id:pk } = req.params;


        try {
            const personaExist: PersonaI | null = await Persona.findByPk(pk);
            if(!personaExist) return res.status(500).json({msg:"La Persona No existe"})
            await Persona.destroy(
                {
                    where: {id: pk}
                }
            )
            res.status(200).json({msg:"Persona Eliminada"})
        } catch (error) {

        }

    }  */

        public async deletePersona(req: Request, res: Response) {
            const { id } = req.params;
            try {
                const persona = await Persona.findOne({where:{id}});
    
                if (persona) {
                    await persona.destroy();
                    res.status(200).json({ message: 'Préstamo eliminado con éxito' });
                } else {
                    res.status(404).json({ message: 'Préstamo no encontrado' });
                }
            } catch (error) {
                res.status(500).json({ message: 'Error al eliminar el préstamo', error });
            }
        }

}
