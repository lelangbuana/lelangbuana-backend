'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            user_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            username: {
                allowNull: false,
                type: Sequelize.STRING(20),
                unique: true
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING(100)
            },
            first_name: {
                allowNull: false,
                type: Sequelize.STRING(20)
            },
            last_name: {
                allowNull: false,
                type: Sequelize.STRING(20)
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING(64),
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
            country: {
                allowNull: false,
                type: Sequelize.STRING(50)
            },
            province: {
                allowNull: false,
                type: Sequelize.STRING(50)
            },
            city: {
                allowNull: false,
                type: Sequelize.STRING(50)
            },
            zip_code: {
                allowNull: false,
                type: Sequelize.STRING(6)
            },
            status: {
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
        return queryInterface.dropTable('Users');
    }
};