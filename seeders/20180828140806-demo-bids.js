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
    const demoBids = [
      {
        auction_id: 1,
        user_id: 2,
        bids_nominal: 1200000,
        created_at: new Date('August 28, 2018 12:00:00')
      },
      {
        auction_id: 1,
        user_id: 4,
        bids_nominal: 1350000,
        created_at: new Date('August 28, 2018 13:30:00')
      },
      {
        auction_id: 1,
        user_id: 3,
        bids_nominal: 1500000,
        created_at: new Date('August 28, 2018 15:30:00')
      },
      {
        auction_id: 1,
        user_id: 4,
        bids_nominal: 1700000,
        created_at: new Date('August 28, 2018 18:00:00')
      },
      {
        auction_id: 1,
        user_id: 2,
        bids_nominal: 1750000,
        created_at: new Date('August 28, 2018 18:40:00')
      },
      {
        auction_id: 2,
        user_id: 3,
        bids_nominal: 70000,
        created_at: new Date('August 28, 2018 11:40:00')
      },
      {
        auction_id: 2,
        user_id: 1,
        bids_nominal: 90000,
        created_at: new Date('August 28, 2018 12:40:00')
      },
      {
        auction_id: 2,
        user_id: 3,
        bids_nominal: 100000,
        created_at: new Date('August 28, 2018 13:40:00')
      },
      {
        auction_id: 2,
        user_id: 4,
        bids_nominal: 130000,
        created_at: new Date('August 28, 2018 15:40:00')
      },
      {
        auction_id: 2,
        user_id: 1,
        bids_nominal: 140000,
        created_at: new Date('August 28, 2018 15:40:00')
      },
      {
        auction_id: 3,
        user_id: 4,
        bids_nominal: 100000,
        created_at: new Date('August 10, 2018 10:20:00')
      },
      {
        auction_id: 3,
        user_id: 2,
        bids_nominal: 140000,
        created_at: new Date('August 10, 2018 12:20:00')
      },
      {
        auction_id: 3,
        user_id: 1,
        bids_nominal: 150000,
        created_at: new Date('August 10, 2018 14:20:00')
      },
      {
        auction_id: 3,
        user_id: 2,
        bids_nominal: 200000,
        created_at: new Date('August 10, 2018 20:20:00')
      },
      {
        auction_id: 3,
        user_id: 4,
        bids_nominal: 280000,
        created_at: new Date('August 10, 2018 20:20:00')
      },
    ];
    return queryInterface.bulkInsert('bids', demoBids, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('bids', null, {});
  }
};
