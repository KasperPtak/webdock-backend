'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [
      {
        content: 'What the actual fuck, am i even looking at here?',
        likes: 10,
        user_id: 2200,
        post_id: 5,
        like_id: 3,
        // reply_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Great post!',
        likes: 3,
        user_id: 2201,
        post_id: 5,
        like_id: 2,
        // reply_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'I totally agree!',
        likes: 2,
        user_id: 2202,
        post_id: 5,
        like_id: 4,
        // reply_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Interesting discussion!',
        likes: 5,
        user_id: 2203,
        post_id: 5,
        like_id: 1,
        // reply_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Nice insights!',
        likes: 4,
        user_id: 2204,
        post_id: 3,
        like_id: 5,
        // reply_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'I learned something new!',
        likes: 1,
        user_id: 2200,
        post_id: 1,
        like_id: 3,
        // reply_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Thanks for sharing!',
        likes: 3,
        user_id: 2200,
        post_id: 2,
        like_id: 2,
        // reply_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'I have a different perspective.',
        likes: 2,
        user_id: 2200,
        post_id: 3,
        like_id: 4,
        // reply_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Well written!',
        likes: 4,
        user_id: 2200,
        post_id: 4,
        like_id: 1,
        // reply_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Interesting point of view!',
        likes: 5,
        user_id: 2200,
        post_id: 1,
        like_id: 5,
        // reply_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'I disagree with this.',
        likes: 2,
        user_id: 2200,
        post_id: 2,
        like_id: 3,
        // reply_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Can you elaborate?',
        likes: 1,
        user_id: 2200,
        post_id: 3,
        like_id: 4,
        // reply_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'This helped me a lot!',
        likes: 4,
        user_id: 2200,
        post_id: 4,
        like_id: 2,
        // reply_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'I have a similar experience.',
        likes: 3,
        user_id: 2200,
        post_id: 1,
        like_id: 1,
        // reply_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Interesting topic!',
        likes: 5,
        user_id: 2200,
        post_id: 2,
        like_id: 5,
        // reply_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'I wish more people knew about this.',
        likes: 1,
        user_id: 2200,
        post_id: 3,
        like_id: 4,
        // reply_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Looking forward to more discussions!',
        likes: 3,
        user_id: 2200,
        post_id: 4,
        like_id: 2,
        // reply_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Great insights!',
        likes: 4,
        user_id: 2202,
        post_id: 5,
        like_id: 3,
        // reply_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'I agree with your points.',
        likes: 2,
        user_id: 2208,
        post_id: 5,
        like_id: 1,
        // reply_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'This made me think!',
        likes: 5,
        user_id: 2204,
        post_id: 5,
        like_id: 4,
        // reply_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Well done!',
        likes: 3,
        user_id: 2205,
        post_id: 5,
        like_id: 5,
        // reply_id: 1,
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
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
