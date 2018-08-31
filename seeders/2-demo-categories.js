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
   const demoCategories = [
      {
        parent_category_id: null,
        category_name: 'Computer',
        created_at: new Date()
      },
      {
        parent_category_id: null,
        category_name: 'Electronic',
        created_at: new Date()
      },
      {
        parent_category_id: null,
        category_name: 'Book and Magazine',
        created_at: new Date()
      },
      {
        parent_category_id: null,
        category_name: 'Fashion',
        created_at: new Date()
      },
      {
        parent_category_id: null,
        category_name: 'Kitchen and Cooking',
        created_at: new Date()
      },
      {
        parent_category_id: 1,
        category_name: 'Laptop',
        created_at: new Date()
      },
      {
        parent_category_id: 1,
        category_name: 'PC',
        created_at: new Date()
      },
      {
        parent_category_id: 1,
        category_name: 'Netbook',
        created_at: new Date()
      },
      {
        parent_category_id: 3,
        category_name: 'Science-Fiction',
        created_at: new Date()
      },
      {
        parent_category_id: 3,
        category_name: 'Non-Fiction',
        created_at: new Date()
      },
      {
        parent_category_id: 4,
        category_name: 'Shoes',
        created_at: new Date()
      },
      {
        parent_category_id: 5,
        category_name: 'Bottle',
        created_at: new Date()
      },
      {
        parent_category_id: 2,
        category_name: 'Smartphone',
        created_at: new Date()
      },
      {
        parent_category_id: 2,
        category_name: 'Iron',
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
