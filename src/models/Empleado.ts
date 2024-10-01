import { Model, DataTypes, ForeignKey } from "sequelize";
import { database } from "../database/db";
import { Persona } from "./Persona";  // Importamos el modelo Persona
import { Sucursal } from "./Sucursal";  // Importamos el modelo Sucursal

export class Empleado extends Model {
  public personaId!: number;  // Relación con Persona (foránea)
  public sucursalId!: number;  // Relación con Sucursal (foránea)
}

export interface EmpleadoI {
  personaId: number;
  sucursalId: number;
}

Empleado.init(
  {
    personaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Persona,  // Hace referencia a la tabla Persona
        key: 'id'        // Llave primaria de la tabla Persona
      },
      onUpdate: 'CASCADE',  // Si se actualiza la Persona, se actualiza en Empleado
      onDelete: 'CASCADE'   // Si se elimina la Persona, también se eliminará en Empleado
    },
    sucursalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Sucursal,  // Hace referencia a la tabla Sucursal
        key: 'id'         // Llave primaria de la tabla Sucursal
      },
      onUpdate: 'CASCADE',  // Si se actualiza la Sucursal, se actualiza en Empleado
      onDelete: 'CASCADE'   // Si se elimina la Sucursal, también se eliminará en Empleado
    }
  },
  {
    tableName: "empleados",
    sequelize: database,
    timestamps: true // Incluye createdAt y updatedAt
  }
);

// Relación de uno a muchos entre Persona y Empleado
Persona.hasMany(Empleado, {
  foreignKey: 'personaId',
  as: 'empleos'
});
Empleado.belongsTo(Persona, {
  foreignKey: 'personaId',
  as: 'persona'
});

// Relación de uno a muchos entre Sucursal y Empleado
Sucursal.hasMany(Empleado, {
  foreignKey: 'sucursalId',
  as: 'empleos'
});
Empleado.belongsTo(Sucursal, {
  foreignKey: 'sucursalId',
  as: 'sucursal'
});
