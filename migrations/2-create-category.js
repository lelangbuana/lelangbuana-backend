'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('categories', {
      category_id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      parent_category_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'category_id'
        }
      },
      category_name: {
        allowNull: false,
        type: Sequelize.STRING(64)
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('categories');
  }
};