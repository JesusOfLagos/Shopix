// config.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('shopix', 'shopix001', 'shopix', {
  host: 'localhost',
  dialect: 'postgres',
});

export default sequelize;
