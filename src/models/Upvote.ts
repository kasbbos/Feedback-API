import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Upvote extends Model {
  public id!: number;
  public feedbackId!: number;
  public userId!: number;
}

Upvote.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    feedbackId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Upvote',
    tableName: 'upvotes',
    timestamps: false,
  }
);

export default Upvote;
