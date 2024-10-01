import { Model, DataTypes, ForeignKey } from "sequelize";
import { database } from "../database/db";
import { Cliente } from "./Cliente";  // Importamos el modelo Cliente
import { Empleado } from "./Empleado";  // Importamos el modelo Empleado

export class Prestamo extends Model {
  public clienteId!:number;  // Relación con Cliente (FK)
  public empleadoId!: number;  // Relación con Empleado (FK)
  public fechaPrestamo!: Date;
  public tipoPrestamo!: string;
  public monto!: number;
  public interes!: number;
  public estado!: string;
}

export interface PrestamoI {
  clienteId: number;
  empleadoId: number;
  fechaPrestamo: Date;
  tipoPrestamo: string;
  monto: number;
  interes: number;
  estado: string;
}

Prestamo.init(
  {
    clienteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Cliente,  // Relación con la tabla Cliente
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    empleadoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Empleado,  // Relación con la tabla Empleado
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    fechaPrestamo: {
      type: DataTypes.DATE,
      allowNull: false
    },
    tipoPrestamo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    monto: {
      type: DataTypes.FLOAT,  
      allowNull: false
    },
    interes: {
      type: DataTypes.FLOAT, 
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING,  // Ej: "aprobado", "pendiente", "rechazado"
      allowNull: false
    }
  },
  {
    tableName: "prestamos",
    sequelize: database,
    timestamps: true  // Incluye createdAt y updatedAt
  }
);

// Relación de uno a muchos entre Cliente y Prestamo
Cliente.hasMany(Prestamo, {
  foreignKey: 'clienteId',
  as: 'prestamos'
});
Prestamo.belongsTo(Cliente, {
  foreignKey: 'clienteId',
  as: 'cliente'
});

// Relación de uno a muchos entre Empleado y Prestamo
Empleado.hasMany(Prestamo, {
  foreignKey: 'empleadoId',
  as: 'prestamos'
});
Prestamo.belongsTo(Empleado, {
  foreignKey: 'empleadoId',
  as: 'empleado'
});
