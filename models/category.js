'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      allowNull: false,
      type: DataTypes.STRING(64)
    }
  }, 
  {
    timestamps: true,
    createdAt : 'created_at',
    updatedAt: false
  });
  category.associate = function(models) {
    // associations can be defined here
    category.belongsTo(models.category, {
      foreignKey: 'parent_category_id'
    })
    category.hasMany(models.category, {
      foreignKey: 'parent_category_id'
    })
  };
  return category;
};