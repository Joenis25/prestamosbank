import { Model, DataTypes, ForeignKey } from "sequelize";
import { database } from "../database/db";
import { Prestamo } from "./Prestamo";  // Importamos el modelo Prestamo

export class Amortizacion extends Model {
  public prestamoId!: number;  // Relación con Prestamo (FK)
  public fecha!: Date;  // Fecha de la amortización
  public estado!: string;  // Estado de la amortización (por ejemplo, "pagado", "pendiente")
  public monto!: number;  // Monto de la amortización
}

export interface AmortizacionI {
  prestamoId: number;
  fecha: Date;
  estado: string;
  monto: number;
}

Amortizacion.init(
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
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    monto: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  },
  {
    tableName: "amortizaciones",
    sequelize: database,
    timestamps: true  // Incluye createdAt y updatedAt
  }
);

// Relación de uno a muchos entre Prestamo y Amortizacion
Prestamo.hasMany(Amortizacion, {
  foreignKey: 'prestamoId',
  as: 'amortizaciones'
});
Amortizacion.belongsTo(Prestamo, {
  foreignKey: 'prestamoId',
  as: 'prestamo'
});
