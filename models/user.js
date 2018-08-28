'use strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user', {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
        validate: {
          len: [1, 20],
          isAlphanumeric: true,
          isLowercase: true,
          notEmpty: true
        }
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      first_name: {
        allowNull: false,
        type: Sequelize.STRING(20),
        defaultValue: '',
        validate: {
          len: [0, 200],
          isAlphanumeric: true
        }
      },
      last_name: {
        allowNull: false,
        type: Sequelize.STRING(20),
        defaultValue: '',
        validate: {
          len: [0, 200],
          isAlphanumeric: true
        }
      },
      profile_photo: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      email: {
        type: Sequelize.STRING(64),
        allowNull: false,
        unique: true,
        validate: {
          len: [1, 100],
          isEmail: true,
          isLowercase: true,
          notEmpty: true
        }
      },
      id_card: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      phone_number: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      province: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      zip_code: {
        allowNull: false,
        type: Sequelize.STRING(6)
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING(32)
      }
    }, {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: false
    });

  User.associate = function (models) {
    // associations can be defined here
    //user.hasMany(models.auction, {
    //  foreignKey: 'user_id'
    //})
    //user.hasMany(models.bid, {
    //  foreignKey: 'user_id'
    //})
  };
  return User;
};