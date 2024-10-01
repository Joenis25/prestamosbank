import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Sucursal extends Model {
  public nombre!: string;
  public direccion!: string;
  public telefono!: string;
}

export interface SucursalI {
  nombre: string;
  direccion: string;
  telefono: string;
}

Sucursal.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Asegura que el teléfono sea único
    },
  },
  {
    tableName: "sucursales", // Nombre de la tabla en plural
    sequelize: database,
    timestamps: true, // Incluye campos createdAt y updatedAt
  }
);
