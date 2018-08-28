'use strict';
module.exports = (sequelize, DataTypes) => {
  const auction = sequelize.define('auction', {
    auction_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(64)
    },
    item_condition: {
      allowNull: false,
      type: DataTypes.STRING(64)
    },
    item_description: {
      allowNull: false,
      type: DataTypes.STRING(300)
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    start_bid:{
      allowNull: false,
      type: DataTypes.INTEGER
    },
    max_bid:{
      allowNull: false,
      type: DataTypes.INTEGER
    },
    min_bid:{
      allowNull: false,
      type: DataTypes.INTEGER
    },
    bids_multiply:{
      allowNull: false,
      type: DataTypes.INTEGER
    },
    start_date:{
      allowNull: false,
      type: DataTypes.DATE
    },
    end_date:{
      allowNull: false,
      type: DataTypes.DATE
    },
    item_photo:{
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    status:{
      allowNull: false,
      type: DataTypes.STRING(32)
    }
  }, 
  {
    timestamps: true,
    createdAt : 'created_at'
  });
  auction.associate = function(models) {
    // associations can be defined here
  };
  return auction;
};