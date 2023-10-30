'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        firstname: 'Alice',
        lastname: 'Johnson',
        username: 'alicej',
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
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
    await queryInterface.bulkUpdate('Users', null, {})
    
  // async down (queryInterface, Sequelize) {
  //   await queryInterface.bulkUpdate('Users', [
  //     {
  //       id: '1',
  //       firstname: 'ditte', 
  //       lastname: 'søren', 
  //       username: 'kaspersophia',
  //       createdAt: new Date(),
  //       updatedAt: new Date()
  //   }
  // ], {})


    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
