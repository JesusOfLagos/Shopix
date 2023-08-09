


// class Carts {
//     private id: string;
//     private owner: string;
//     private cartContents: [string];
//     private maximumObjectsInTheCart: Number;
//     private isDeleted: Boolean;
//     public dateCreated: Date;
    
//     constructor(id: string, maximumObjectsInTheCart: Number, cartContents: [string], dateCreated: Date, isDeleted: Boolean, owner: string){
//         this.id = id;
//         this.maximumObjectsInTheCart = maximumObjectsInTheCart;
//         this.cartContents = cartContents;
//         this.isDeleted = isDeleted;
//         this.owner= owner;
//         this.dateCreated = dateCreated
//     }


//     addToCarts(itemsId: string){
//         return this.cartContents.push(itemsId)
//     }

//     removeObjectFromCart(itemId: string) {
//         return this.cartContents.remove(itemId)
//     }


//  }


//  export {Carts}


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

class Cart extends Model {
  public quantity!: number;
}

Cart.init(
  {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1, 
    },
  },
  {
    sequelize,
    modelName: 'Cart',
  }
);

export default Cart;

// Setting up the association in User model
User.belongsToMany(Product, { through: Cart });
Product.belongsToMany(User, { through: Cart });

