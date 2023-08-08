// index.ts (or your main entry point)
import sequelize from './sequelize';
import User from './Models/User';

(async () => {
  try {
    await sequelize.sync({ force: true }); // Use { force: true } to drop and recreate tables
    console.log('Database synced');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
})();
