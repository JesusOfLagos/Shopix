


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
