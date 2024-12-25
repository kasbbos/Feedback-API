import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Status extends Model {
  public id!: number;
  public name!: string;
}

Status.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: 'statuses',
    timestamps: false,
  }
);

export default Status;
