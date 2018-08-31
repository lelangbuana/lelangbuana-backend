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

    const demoAuctions = [
      {
        user_id: 1,
        category_id: 13,
        title: 'iPhone 4',
        item_condition: 'Used - Very Good',
        item_description: 'This is my phone which has been used about 3 years. Hardware is still flawless. No bugs or crashes on software. Good condition for use.',
        quantity: 1,
        start_bid: 1000000,
        max_bid: 2000000,
        min_bid: 1100000,
        bids_multiply: 50000,
        start_date: new Date('August 28, 2018 10:00:00'),
        end_date: new Date('August 30, 2018 10:00:00'),
        item_photo: 'https://d3nevzfk7ii3be.cloudfront.net/igi/lbhvFxdx65E4JEca.large',
        status: 'ongoing',
        created_at: new Date()
      },
      {
        user_id: 2,
        category_id: 12,
        title: 'Tupperware water bottle',
        item_condition: 'Used - Very Good',
        item_description: 'Color: Black. Capacity: 1L. Height: 30 cm. Weight: 200 gr.',
        quantity: 1,
        start_bid: 50000,
        max_bid: 200000,
        min_bid: 5000,
        bids_multiply: 2000,
        start_date: new Date('August 28, 2018 10:00:00'),
        end_date: new Date('August 29, 2018 10:00:00'),
        item_photo: 'https://images-na.ssl-images-amazon.com/images/I/51Aj5eesj7L._SX425_.jpg',
        status: 'ongoing',
        created_at: new Date()
      },
      {
        user_id: 3,
        category_id: 14,
        title: 'Cosmos Iron',
        item_condition: 'Used - Very Good',
        item_description: 'Color: Orange. Electric Usage: 200 watt. Dimension: 25x10x5 cm. Weight: 600 gr.',
        quantity: 1,
        start_bid: 50000,
        max_bid: 300000,
        min_bid: 5000,
        bids_multiply: 5000,
        start_date: new Date('August 10, 2018 10:00:00'),
        end_date: new Date('August 11, 2018 10:00:00'),
        item_photo: 'https://jualelektronik.com/wp-content/uploads/2016/06/Cosmos-Setrika-400-Watt-CIS-418.jpg',
        status: 'success',
        created_at: new Date()
      },
    ];

    return queryInterface.bulkInsert('auctions', demoAuctions, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('auctions', null, {});
  }
};
