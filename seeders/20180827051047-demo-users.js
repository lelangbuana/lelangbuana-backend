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
      password: 'adminpassword',
      first_name: 'admin',
      last_name: 'lelang',
      profile_photo: 'photo',
      email: 'admin@gmail.com',
      id_card: 'Gambar KTP',
      phone_number: '0857',
      address: 'Nongsa',
      city: 'Batam',
      province: 'Kepulauan Riau',
      zip_code: '123456',
      country: 'Indonesia',
      status: 'Active',
      created_at: new Date()
    }, {
      username: 'user',
      password: 'userpassword',
      first_name: 'admin',
      last_name: 'lelang',
      profile_photo: 'photo',
      email: 'user@gmail.com',
      id_card: 'Gambar KTP',
      phone_number: '0856',
      address: 'Batam Centre',
      city: 'Batam',
      province: 'Kepulauan Riau',
      zip_code: '654321',
      country: 'Indonesia',
      status: 'Active',
      created_at: new Date()
    }];

    return queryInterface.bulkInsert('users', demoUsers, {});
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