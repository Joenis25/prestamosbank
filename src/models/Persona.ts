import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Persona extends Model {
  public nombre!: string;
  public apellido!: string;
  public direccion!: string;
  public correo!: string;
  public telefono!: string;
}

export interface PersonaI {
  nombre: string;
  apellido: string;
  direccion: string;
  correo: string;
  telefono: string;
}

Persona.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true, // Verifica que el correo tenga un formato válido
      },
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Asegura que el teléfono sea único
    },
  },
  {
    tableName: "personas",
    sequelize: database,
    timestamps: true, // Si deseas manejar timestamps como createdAt y updatedAt
  }
);
