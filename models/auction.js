'use strict';
module.exports = (sequelize, DataTypes) => {
  const auction = sequelize.define('auction', {
    title: DataTypes.STRING
  }, {});
  auction.associate = function(models) {
    // associations can be defined here
  };
  return auction;
};