import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Category from './Category';
import Status from './Status';

class Feedback extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public categoryId!: number;
  public statusId!: number;
  public authorId!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Feedback.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'categories',
        key: 'id',
      },
    },
    statusId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'statuses',
        key: 'id',
      },
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'feedbacks',
    timestamps: true,
  }
);

// Устанавливаем связи
Feedback.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });
Feedback.belongsTo(Status, { foreignKey: 'statusId', as: 'status' });

export default Feedback;
