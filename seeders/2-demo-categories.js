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
    const demoCategories = [{
        category_id: 1,
        parent_category_id: null,
        category_name: 'Fashions',
        created_at: new Date()
      },
      {
        category_id: 2,
        parent_category_id: null,
        category_name: 'Furnitures',
        created_at: new Date()
      },
      {
        category_id: 3,
        parent_category_id: null,
        category_name: 'Sports',
        created_at: new Date()
      },
      {
        category_id: 4,
        parent_category_id: null,
        category_name: 'Electronics',
        created_at: new Date()
      },
      {
        category_id: 5,
        parent_category_id: null,
        category_name: 'Vehicles',
        created_at: new Date()
      },
      {
        category_id: 6,
        parent_category_id: null,
        category_name: 'Collections & Hoby',
        created_at: new Date()
      },
      {
        category_id: 7,
        parent_category_id: 1,
        category_name: 'Clothes',
        created_at: new Date()
      },
      {
        category_id: 8,
        parent_category_id: 1,
        category_name: 'Watches',
        created_at: new Date()
      },
      {
        category_id: 9,
        parent_category_id: 1,
        category_name: 'Bags',
        created_at: new Date()
      },
      {
        category_id: 10,
        parent_category_id: 1,
        category_name: 'Accessories',
        created_at: new Date()
      },
      {
        category_id: 11,
        parent_category_id: 1,
        category_name: 'Others',
        created_at: new Date()
      },
      {
        category_id: 12,
        parent_category_id: 2,
        category_name: 'Tables',
        created_at: new Date()
      },
      {
        category_id: 13,
        parent_category_id: 2,
        category_name: 'Chairs',
        created_at: new Date()
      },
      {
        category_id: 14,
        parent_category_id: 2,
        category_name: 'Cupboards',
        created_at: new Date()
      },
      {
        category_id: 15,
        parent_category_id: 2,
        category_name: 'Kitchen Equipments',
        created_at: new Date()
      },
      {
        category_id: 16,
        parent_category_id: 2,
        category_name: 'Others',
        created_at: new Date()
      },
      {
        category_id: 17,
        parent_category_id: 3,
        category_name: 'Bikes',
        created_at: new Date()
      },
      {
        category_id: 18,
        parent_category_id: 3,
        category_name: 'Accessories',
        created_at: new Date()
      },
      {
        category_id: 19,
        parent_category_id: 3,
        category_name: 'Rackets',
        created_at: new Date()
      },
      {
        category_id: 20,
        parent_category_id: 3,
        category_name: 'Balls',
        created_at: new Date()
      },
      {
        category_id: 21,
        parent_category_id: 3,
        category_name: 'Shoes',
        created_at: new Date()
      },
      {
        category_id: 22,
        parent_category_id: 3,
        category_name: 'Jerseys',
        created_at: new Date()
      },
      {
        category_id: 23,
        parent_category_id: 3,
        category_name: 'Others',
        created_at: new Date()
      },
      {
        category_id: 24,
        parent_category_id: 4,
        category_name: 'Handphones & Tablets',
        created_at: new Date()
      },
      {
        category_id: 25,
        parent_category_id: 4,
        category_name: 'Cameras & Photography',
        created_at: new Date()
      },
      {
        category_id: 26,
        parent_category_id: 4,
        category_name: 'PC & Laptops',
        created_at: new Date()
      },
      {
        category_id: 27,
        parent_category_id: 4,
        category_name: 'TV & Monitors',
        created_at: new Date()
      },
      {
        category_id: 28,
        parent_category_id: 4,
        category_name: 'Others',
        created_at: new Date()
      },
      {
        category_id: 29,
        parent_category_id: 5,
        category_name: 'Cars',
        created_at: new Date()
      },
      {
        category_id: 30,
        parent_category_id: 5,
        category_name: 'Motorcycles',
        created_at: new Date()
      },
      {
        category_id: 31,
        parent_category_id: 5,
        category_name: 'Spareparts',
        created_at: new Date()
      },
      {
        category_id: 32,
        parent_category_id: 5,
        category_name: 'Wheels',
        created_at: new Date()
      },
      {
        category_id: 33,
        parent_category_id: 5,
        category_name: 'Accessories',
        created_at: new Date()
      },
      {
        category_id: 34,
        parent_category_id: 6,
        category_name: 'Gem Stone',
        created_at: new Date()
      },
      {
        category_id: 35,
        parent_category_id: 6,
        category_name: 'Antiques',
        created_at: new Date()
      },
      {
        category_id: 36,
        parent_category_id: 6,
        category_name: 'Musical Instruments',
        created_at: new Date()
      },
      {
        category_id: 37,
        parent_category_id: 6,
        category_name: 'Dolls and Toys',
        created_at: new Date()
      },
      {
        category_id: 38,
        parent_category_id: 6,
        category_name: 'Tapes, Books & Magazines',
        created_at: new Date()
      },
      {
        category_id: 39,
        parent_category_id: 6,
        category_name: 'Handicrafts',
        created_at: new Date()
      },
      {
        category_id: 40,
        parent_category_id: 6,
        category_name: 'Artworks',
        created_at: new Date()
      },
      {
        category_id: 41,
        parent_category_id: 6,
        category_name: 'Old Money',
        created_at: new Date()
      },
      {
        category_id: 42,
        parent_category_id: 6,
        category_name: 'Others',
        created_at: new Date()
      }
    ];
    return queryInterface.bulkInsert('categories', demoCategories, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('categories', null, {});
  }
};