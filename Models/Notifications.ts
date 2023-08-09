


// class Notifications {
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


// export {Notifications}



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

class Notification extends Model {
  public from!: string;
  public to!: string;
}

Notification.init(
  {
    from: {
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

export default Notification;
