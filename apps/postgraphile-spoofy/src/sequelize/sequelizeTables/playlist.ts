import { DataTypes, fn } from 'sequelize';
import sequelize from '../sequelizeSetup';
import Users from './users';

const Playlist = sequelize.define('Playlist', {
  id: {
    type: DataTypes.UUID,
    defaultValue: fn('uuid_generate_v4'),
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_playlist: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

Playlist.belongsTo(Users, {
  foreignKey: {
    name: 'creator_id',
    allowNull: false,
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

export default Playlist;
