'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        firstname: 'Alice',
        lastname: 'Johnson',
        username: 'alicej',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Bob',
        lastname: 'Smith',
        username: 'bobsmith',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Charlie',
        lastname: 'Brown',
        username: 'charlieb',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'David',
        lastname: 'Lee',
        username: 'davidl',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Eva',
        lastname: 'Wong',
        username: 'evaw',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Frank',
        lastname: 'Garcia',
        username: 'frankg',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Grace',
        lastname: 'Davis',
        username: 'graced',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Henry',
        lastname: 'Turner',
        username: 'henryt',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Isabella',
        lastname: 'Parker',
        username: 'isabellap',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Jack',
        lastname: 'Anderson',
        username: 'jacka',
        isAdmin: false,
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
