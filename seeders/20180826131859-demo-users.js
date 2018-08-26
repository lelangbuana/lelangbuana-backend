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
        name: 'M Haidar Hanif',
        username: 'haidar',
        email: 'haidar@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Michael Tamsil',
        username: 'michaeltamsil',
        email: 'michaeltamsil@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'fabilqis',
        email: 'fadillah.bilqis@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'gunturkh',
        email: 'guntur.kh@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'mayasopiee',
        email: 'mayasopiee@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'alifraher',
        email: 'alifraher@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

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