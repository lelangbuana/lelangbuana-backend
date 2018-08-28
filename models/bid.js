'use strict';
module.exports = (sequelize, DataTypes) => {
  const bid = sequelize.define('bid', {
    created_at: DataTypes.DATE
  }, {});
  bid.associate = function(models) {
    // associations can be defined here
  };
  return bid;
};