'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
        {
          firstname: 'Alice',
          lastname: 'Johnson',
          username: 'alicej',
          email: 'alicej@example.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstname: 'Bob',
          lastname: 'Smith',
          username: 'bobsmith',
          email: 'bobsmith@example.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstname: 'Charlie',
          lastname: 'Brown',
          username: 'charlieb',
          email: 'charlieb@example.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstname: 'David',
          lastname: 'Lee',
          username: 'davidl',
          email: 'davidl@example.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstname: 'Eva',
          lastname: 'Wong',
          username: 'evaw',
          email: 'evaw@example.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstname: 'Frank',
          lastname: 'Garcia',
          username: 'frankg',
          email: 'frankg@example.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstname: 'Grace',
          lastname: 'Davis',
          username: 'graced',
          email: 'graced@example.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstname: 'Henry',
          lastname: 'Turner',
          username: 'henryt',
          email: 'henryt@example.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstname: 'Isabella',
          lastname: 'Parker',
          username: 'isabellap',
          email: 'isabellap@webdock.io',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstname: 'Jack',
          lastname: 'Anderson',
          username: 'jacka',
          email: 'jacka@webdock.io',
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
