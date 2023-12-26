import { DataTypes, fn } from 'sequelize';
import sequelize from '../sequelizeSetup';

const Artists = sequelize.define('Artists', {
  id: {
    type: DataTypes.UUID,
    defaultValue: fn('uuid_generate_v4'),
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Artists;
