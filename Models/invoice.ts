

import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize.ts'

class Invoice extends Model {
  public for!: string;
  public to!: string;
}

Invoice.init(
  {
    for: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    to: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'Notification',
  }
);

export default Invoice;
