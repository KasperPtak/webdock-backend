'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PostHasUpvotes', [
      {
        user_id: 2200,
        post_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2201,
        post_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2203,
        post_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2204,
        post_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
  ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
