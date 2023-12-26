const dotenv = require('dotenv');
import { Sequelize } from 'sequelize';

dotenv.config();

const sequelize = new Sequelize(
  process.env['NX_POSTGRAPHILE_CONNECTION_STRING'] || '',
  {
    dialect: 'postgres',
    schema: process.env['NX_POSTGRAPHILE_SCHEMA'],
    define: {
      freezeTableName: true,
      timestamps: false,
    },
    logging: console.log,
  }
);

export default sequelize;
