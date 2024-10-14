import { DataTypes, fn } from 'sequelize';
import sequelize from '../sequelizeSetup';

const Users = sequelize.define('Users', {
  id: {
    type: DataTypes.UUID,
    defaultValue: fn('uuid_generate_v4'),
    primaryKey: true,
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coordinates: {
    type: DataTypes.ARRAY(DataTypes.FLOAT),
    allowNull: true,
  },
});

export default Users;
