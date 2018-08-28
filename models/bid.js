'use strict';
module.exports = (sequelize, DataTypes) => {
  const bid = sequelize.define('bid', {
    bid_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    bids_nominal: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, 
  {
    timestamps: true,
    createdAt : 'created_at'
  });
  bid.associate = function(models) {
    // associations can be defined here
    bid.belongsTo(models.user, {
      foreignKey: 'user_id'
    })
    bid.belongsTo(models.auction, {
      foreignKey: 'auction_id'
    })
  };
  return bid;
};