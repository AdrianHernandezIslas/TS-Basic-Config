import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import ProductoType from "../types/producto.type";


export class ProductoModel extends Model<ProductoType> {}

ProductoModel.init(
  {
    idProducto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement:true
    },
    nombreProducto: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    precioCompra: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    precioVenta: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    existencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    url_imagen:{
      type: DataTypes.STRING(45),
      allowNull: true,
    }
  },
  {
    sequelize,
    tableName: "producto",
  }
);
