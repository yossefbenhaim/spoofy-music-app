'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Change column 'name' in 'Users' table to allowNull: true
    await queryInterface.changeColumn('Users', 'name', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    // Insert new rows into 'Users' with null in the 'name' column
    await queryInterface.bulkInsert('Users', [
      { name: null },
      { name: null },
      // Add more rows as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Revert the change, setting allowNull back to false
    await queryInterface.changeColumn('Users', 'name', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
};
