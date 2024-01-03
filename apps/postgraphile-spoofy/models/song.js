'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    static associate(models) {
      Song.belongsTo(models.Artist, {
        foreignKey: 'artistId',
        as: 'artist',
      });
    }
  }

  Song.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    artistId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Song',
  });

  return Song;
};
