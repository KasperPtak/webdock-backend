'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PostHasComments', [
      {
        post_id: 1,
        comment_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_id: 2,
        comment_id: 3,
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
