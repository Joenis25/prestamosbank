import { Model, DataTypes, ForeignKey } from "sequelize";
import { database } from "../database/db";
import { Prestamo } from "./Prestamo";  // Importamos el modelo Prestamo

export class Garantia extends Model {
  public prestamoId!: number;  
  public tipoGarantia!: string;
  public valor!: number;  // Valor de la garantía
  public descripcion!: string;  // Descripción de la garantía
}

export interface GarantiaI {
  prestamoId: number;
  tipoGarantia: string;
  valor: number;
  descripcion: string;
}

Garantia.init(
  {
    prestamoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Prestamo,  // Relación con la tabla Prestamo
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    tipoGarantia: {
      type: DataTypes.STRING,
      allowNull: false
    },
    valor: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true  // Puede ser opcional
    }
  },
  {
    tableName: "garantias",
    sequelize: database,
    timestamps: true  // Incluye createdAt y updatedAt
  }
);

// Relación de uno a muchos entre Prestamo y Garantia
Prestamo.hasMany(Garantia, {
  foreignKey: 'prestamoId',
  as: 'garantias'
});
Garantia.belongsTo(Prestamo, {
  foreignKey: 'prestamoId',
  as: 'prestamo'
});
