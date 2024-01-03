'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    static associate(models) {
      Artist.hasMany(models.Song, {
        foreignKey: 'artistId',
        as: 'songs',
      });
    }
  }
  
  Artist.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Artist',
  });

  return Artist;
};
