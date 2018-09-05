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
        username: 'guntur',
        password: '$2b$04$lt3xi83pYqAlY9Iurvq25e.IA6lfx0hTly8fr87EiX6/.28zFZcuq',
        first_name: 'guntur',
        last_name: 'kurniawan',
        profile_photo: 'https://avatars3.githubusercontent.com/u/36984278?v=4',
        email: 'guntur@gmail.com',
        id_card: 'Gambar KTP',
        phone_number: '0857',
        address: 'Nongsa',
        city: 'Batam',
        province: 'Kepulauan Riau',
        zip_code: '123456',
        country: 'Indonesia',
        status: 'active',
        created_at: new Date()
      }, {
        username: 'fadilla',
        password: '$2b$04$lt3xi83pYqAlY9Iurvq25e.IA6lfx0hTly8fr87EiX6/.28zFZcuq',
        first_name: 'fadilla',
        last_name: 'bilqis',
        profile_photo: 'https://avatars2.githubusercontent.com/u/18109431?v=4',
        email: 'fadilla@gmail.com',
        id_card: 'Gambar KTP',
        phone_number: '0856',
        address: 'Batam Centre',
        city: 'Batam',
        province: 'Kepulauan Riau',
        zip_code: '654321',
        country: 'Indonesia',
        status: 'active',
        created_at: new Date()
      }, {
        username: 'maya',
        password: '$2b$04$lt3xi83pYqAlY9Iurvq25e.IA6lfx0hTly8fr87EiX6/.28zFZcuq',
        first_name: 'maya',
        last_name: 'sophie',
        profile_photo: 'https://avatars0.githubusercontent.com/u/9446897?v=4',
        email: 'maya@gmail.com',
        id_card: 'Gambar KTP',
        phone_number: '0857',
        address: 'Nongsa',
        city: 'Batam',
        province: 'Kepulauan Riau',
        zip_code: '123456',
        country: 'Indonesia',
        status: 'active',
        created_at: new Date()
      },
      {
        username: 'alif',
        password: '$2b$04$lt3xi83pYqAlY9Iurvq25e.IA6lfx0hTly8fr87EiX6/.28zFZcuq',
        first_name: 'alif',
        last_name: 'raher',
        profile_photo: 'https://avatars1.githubusercontent.com/u/22427140?v=4',
        email: 'alifraher@gmail.com',
        id_card: 'Gambar KTP',
        phone_number: '0857',
        address: 'Nongsa',
        city: 'Batam',
        province: 'Kepulauan Riau',
        zip_code: '123456',
        country: 'Indonesia',
        status: 'active',
        created_at: new Date()
      }
    ];

    return queryInterface.bulkInsert('users', demoUsers, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('users', null, {});
  }
};