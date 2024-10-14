import sequelize from '../sequelizeSetup';
import { DataTypes } from 'sequelize';
import Users from './users';
import Songs from './songs';

const Favorites = sequelize.define(
  'Favorites',
  {
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: Users,
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
    tableName: 'Favorites',
    timestamps: false,
  }
);

Favorites.belongsTo(Users, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Favorites.belongsTo(Songs, {
  foreignKey: 'song_id',
  onDelete: 'CASCADE',
});

export default Favorites;
