import { DataTypes } from 'sequelize';

import sequelize from '../sequelizeSetup';
import Songs from './songs';
import Playlist from './playlist';

const PlaylistSongs = sequelize.define(
  'PlaylistSongs',
  {
    playlist_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: Playlist,
        key: 'id',
      },
    },
    song_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: Songs,
        key: 'id',
      },
    },
  },
  {
    tableName: 'PlaylistSongs',
    timestamps: false,
  }
);

PlaylistSongs.belongsTo(Playlist, {
  foreignKey: 'playlist_id',
  onDelete: 'CASCADE',
});

PlaylistSongs.belongsTo(Songs, {
  foreignKey: 'song_id',
  onDelete: 'CASCADE',
});

export default PlaylistSongs;
