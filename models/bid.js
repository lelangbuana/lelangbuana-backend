'use strict';
module.exports = (sequelize, DataTypes) => {
  const bid = sequelize.define('bid', {
    bid_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  }, 
  {
    timestamps: true,
    createdAt : 'created_at'
  });
  bid.associate = function(models) {
    // associations can be defined here
  };
  return bid;
};