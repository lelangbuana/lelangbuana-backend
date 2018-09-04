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
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING(32)
    }
  }, 
  {
    timestamps: true,
    createdAt : 'created_at',
    updatedAt: false
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