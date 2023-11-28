'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PostHasUpvotes', [
      {
        user_id: 1,
        post_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        post_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        post_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 10,
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
