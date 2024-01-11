'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create 'Users' table
    await queryInterface.createTable('Users', {
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
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });

    // Insert values into 'Users' table
    await queryInterface.bulkInsert('Users', [
      { name: 'User 1' },
      { name: 'User 2' },
      // Add more rows as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Drop 'Users' table
    await queryInterface.dropTable('Users');
  },
};
