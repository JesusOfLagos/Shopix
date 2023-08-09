
// class Users {
//     public firstName: string;
//     public lastName: string;
//     public email: string;
//     public password: string;

//     constructor(firstName: string, lastName: string, email: string, password: string){
//         this.email = email;
//         this.password = password;
//         this.lastName = lastName;
//         this.firstName = firstName;
//     }

//     get fullName() {
//         return `${this.firstName} + " " + ${this.lastName}`
//     }
// }

// export{Users}



import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize.ts'

class User extends Model {
  public username!: string;
  public email!: string;
}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'User',
  }
);


User.hasMany(Cart);
User.hasMany(Review);
Review.belongsTo(User);






export default User;
