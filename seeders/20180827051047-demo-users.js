'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    const demoUsers = [{
      username: 'admin',
      password: 'admin',
      first_name: 'admin',
      last_name: 'lelang',
      email: 'admin@gmail.com',
      id_card: 'Gambar KTP',
      phone_number: '0857',
      address: 'Nongsa',
      country: 'Indonesia',
      province: 'Kepulauan Riau',
      city: 'Batam',
      zip_code: '123456',
      status: 'Active',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'user',
      password: 'user',
      first_name: 'user',
      last_name: 'lelang',
      email: 'user@gmail.com',
      id_card: 'Gambar KTP',
      phone_number: '0856',
      address: 'Batu Aji',
      country: 'Indonesia',
      province: 'Kepulauan Riau',
      city: 'Batam',
      zip_code: '654321',
      status: 'Inactive',
      createdAt: new Date(),
      updatedAt: new Date()
    }];

    return queryInterface.bulkInsert('Users', demoUsers, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};