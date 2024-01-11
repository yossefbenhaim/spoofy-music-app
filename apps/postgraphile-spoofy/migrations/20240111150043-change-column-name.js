'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Change column 'name' in 'Users' table to allowNull: true
    await queryInterface.changeColumn('Users', 'name', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Revert the change, setting allowNull back to false
    await queryInterface.changeColumn('Users', 'name', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
};
