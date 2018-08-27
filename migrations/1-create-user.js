'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            user_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            username: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            first_name: {
                allowNull: false,
                type: Sequelize.STRING(20),
                defaultValue: ''
            },
            last_name: {
                allowNull: false,
                type: Sequelize.STRING(20),
                defaultValue: ''
            },
            profile_photo: {
                allowNull: false,
                type: Sequelize.STRING(100)
            },
            email: {
                type: Sequelize.STRING(64),
                allowNull: false,
                unique: true
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
            },
            created_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Users');
    }
};