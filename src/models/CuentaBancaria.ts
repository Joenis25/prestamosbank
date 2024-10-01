import { Model, DataTypes, ForeignKey } from "sequelize";
import { database } from "../database/db";
import { Cliente } from "./Cliente";  // Importamos el modelo Cliente para la relación

export class CuentaBancaria extends Model {
  public clienteId!: number;  // Relación con Cliente (foránea)
  public numeroCuenta!: string;
  public tipoCuenta!: string;
  public saldo!: number;
}

export interface CuentaBancariaI {
  clienteId: number;
  numeroCuenta: string;
  tipoCuenta: string;
  saldo: number;
}

CuentaBancaria.init(
  {
    clienteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Cliente,  // Hace referencia a la tabla Cliente
        key: 'id'        // Llave primaria de la tabla Cliente
      },
      onUpdate: 'CASCADE',  // Si se actualiza el Cliente, se actualiza en CuentaBancaria
      onDelete: 'CASCADE'   // Si se elimina el Cliente, también se eliminará en CuentaBancaria
    },
    numeroCuenta: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true  // Asegura que el número de cuenta sea único
    },
    tipoCuenta: {
      type: DataTypes.STRING,
      allowNull: false  // Puede ser tipo de cuenta como "ahorro" o "corriente"
    },
    saldo: {
      type: DataTypes.FLOAT,  // Se usa FLOAT para manejar decimales
      allowNull: false,
      defaultValue: 0  // Por defecto, las cuentas comienzan con saldo 0
    }
  },
  {
    tableName: "cuentas_bancarias",
    sequelize: database,
    timestamps: true  // Incluye createdAt y updatedAt
  }
);

// Definimos la relación entre Cliente y CuentaBancaria
Cliente.hasMany(CuentaBancaria, {
  foreignKey: 'clienteId',
  as: 'cuentasBancarias'
});

CuentaBancaria.belongsTo(Cliente, {
  foreignKey: 'clienteId',
  as: 'cliente'
});
