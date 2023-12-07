'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [
      {
        title: 'Introduction to JavaScript',
        upvotes: 120,
        content: 'Just wanted to share my excitement about learning JavaScript. It opens up a whole new world of possibilities!',
        comment_id: 22,
        category_id: 1,
        user_id: 2200,
        upvotes_id: 90,
        status_id: 3,
        image: 'javascript_image.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Test post #2',
        upvotes: 120,
        content: 'Just wanted to share my excitement about learning JavaScript. It opens up a whole new world of possibilities!',
        comment_id: 22,
        category_id: 1,
        user_id: 2201,
        upvotes_id: 90,
        status_id: 4,
        image: 'javascript_image.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Best Frameworks for Web Development',
        upvotes: 85,
        content: 'What are your favorite frameworks for web development? Ive been using React, but I want to explore others.',
        comment_id: 45,
        category_id: 2,
        user_id: 2202,
        upvotes_id: 60,
        status_id: 1,
        image: 'frameworks_comparison.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Tips for Efficient Coding',
        upvotes: 42,
        content: 'Share your tips for writing efficient and clean code. Ill start: Always use meaningful variable names!',
        comment_id: 78,
        category_id: 1,
        user_id: 2203,
        upvotes_id: 30,
        status_id: 2,
        image: 'coding_tips.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Tips for Efficient Coding 2',
        upvotes: 42,
        content: 'Share your tips for writing efficient and clean code. Ill start: Always use meaningful variable names!',
        comment_id: 78,
        category_id: 1,
        user_id: 2204,
        upvotes_id: 30,
        status_id: 2,
        image: 'coding_tips.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Tips for Efficient Coding 3',
        upvotes: 42,
        content: 'Share your tips for writing efficient and clean code. Ill start: Always use meaningful variable names!',
        comment_id: 78,
        category_id: 1,
        user_id: 2205,
        upvotes_id: 30,
        status_id: 2,
        image: 'coding_tips.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Favorite Programming Books',
        upvotes: 18,
        content: 'Looking for some good programming books. Any recommendations?',
        comment_id: 112,
        category_id: 3,
        user_id: 2206,
        upvotes_id: 15,
        status_id: 1,
        image: 'programming_books.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Debugging Challenges',
        upvotes: 55,
        content: 'Share your most challenging debugging experiences and how you overcame them. Let\'s learn from each other!',
        comment_id: 156,
        category_id: 2,
        user_id: 2207,
        upvotes_id: 45,
        status_id: 3,
        image: 'debugging_challenges.gif',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Debugging Challenges',
        upvotes: 55,
        content: 'Share your most challenging debugging experiences and how you overcame them. Let\'s learn from each other!',
        comment_id: 156,
        category_id: 2,
        user_id: 2208,
        upvotes_id: 45,
        status_id: 3,
        image: 'debugging_challenges.gif',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Debugging Challenges',
        upvotes: 55,
        content: 'Share your most challenging debugging experiences and how you overcame them. Let\'s learn from each other!',
        comment_id: 156,
        category_id: 2,
        user_id: 2209,
        upvotes_id: 45,
        status_id: 4,
        image: 'debugging_challenges.gif',
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

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
