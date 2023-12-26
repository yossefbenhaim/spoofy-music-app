import { DataTypes, fn } from 'sequelize';
import sequelize from '../sequelizeSetup';
import Artists from './artist';

const Songs = sequelize.define('Songs', {
  id: {
    type: DataTypes.UUID,
    defaultValue: fn('uuid_generate_v4'),
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Songs.belongsTo(Artists, {
  foreignKey: {
    name: 'artist_id',
    allowNull: false,
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

export default Songs;
