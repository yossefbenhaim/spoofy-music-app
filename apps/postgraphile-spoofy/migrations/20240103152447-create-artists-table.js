'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create 'Artists' table
    await queryInterface.createTable('Artists', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Drop 'Artists' table
    await queryInterface.dropTable('Artists');
  },
};
