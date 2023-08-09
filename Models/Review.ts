
import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize.ts'

class Review extends Model {
  public content!: string;
}

Review.init(
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Review',
  }
);

Review.belongsTo(User);
Review.belongsTo(Product);

export default Review;
