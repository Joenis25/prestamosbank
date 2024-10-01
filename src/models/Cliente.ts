import { Model, DataTypes, ForeignKey } from "sequelize";
import { database } from "../database/db";
import { Persona } from "./Persona";  // Importamos el modelo Persona para la relación

export class Cliente extends Model {
  public personaId!:number; // Relación con Persona (foránea)
  public contrato!: string;
}

export interface ClienteI {
  personaId: number;
  contrato: string;
}

Cliente.init(
  {
    personaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Persona, // Hace referencia a la tabla Persona
        key: 'id'      // Llave primaria de la tabla Persona
      },
      onUpdate: 'CASCADE',  // Si se actualiza la Persona, se actualiza en Cliente
      onDelete: 'CASCADE'   // Si se elimina la Persona, también se eliminará en Cliente
    },
    contrato: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: "clientes",
    sequelize: database,
    timestamps: true // Incluye createdAt y updatedAt
  }
);

// Definimos la relación entre Persona y Cliente
Persona.hasMany(Cliente, {
  foreignKey: 'personaId',
  as: 'clientes'
});

Cliente.belongsTo(Persona, {
  foreignKey: 'personaId',
  as: 'persona'
});
