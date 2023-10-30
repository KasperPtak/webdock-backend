'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', [
      {
          role_name: 'user',
      },
      {
          role_name: 'admin',
      },
      {
          role_name: 'super_admin'
      }
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
