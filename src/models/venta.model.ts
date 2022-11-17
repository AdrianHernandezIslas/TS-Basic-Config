import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import VentaType from "../types/venta.type";

export class VentaModel extends Model<VentaType> {}

VentaModel.init(
  {
    idVenta: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue:DataTypes.UUIDV4
    },
    idEmpleado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fechaVenta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "venta",
  }
);
