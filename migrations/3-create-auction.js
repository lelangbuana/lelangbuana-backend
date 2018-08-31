'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('auctions', {
      auction_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'user_id'
        }
      },
      category_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'category_id'
        }
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(64)
      },
      item_condition: {
        allowNull: false,
        type: Sequelize.STRING(32)
      },
      item_description: {
        allowNull: false,
        type: Sequelize.STRING(300)
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      start_bid:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      max_bid:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      min_bid:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      bids_multiply:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      start_date:{
        allowNull: false,
        type: Sequelize.DATE
      },
      end_date:{
        allowNull: false,
        type: Sequelize.DATE
      },
      item_photo:{
        allowNull: false,
        type: Sequelize.STRING(200)
      },
      status:{
        allowNull: false,
        type: Sequelize.STRING(32)
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('auctions');
  }
};