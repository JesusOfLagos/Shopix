


// class Products {
//     private to: string;
//     private from: string;
//     private content: string;
//     private date: Date;
//     private isRead: Boolean;
    
//     constructor(to: string, from: string, content: string, date: Date, isRead: Boolean){
//         this.to = to;
//         this.from = from;
//         this.content = content;
//         this.date = date;
//         this.isRead = isRead;
//     }
//  }


// export{Products}




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


// models/Product.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config';

class Product extends Model {
  public name!: string;
  public price!: number;
}

Product.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Product',
  }
);


Product.hasMany(Review);


export default Product;

