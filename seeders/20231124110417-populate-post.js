'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [
      {
        id: 1,
        title: 'JS Hosting',
        content: `In the ever-evolving landscape of web development, the excitement surrounding JavaScript hosting is palpable. The ability to host JavaScript opens up a myriad of possibilities for developers, ushering in a new era of dynamic and interactive web applications.
      
        JavaScript, originally designed as a client-side scripting language, has transcended its initial role and is now a key player in both frontend and backend development. With the advent of server-side JavaScript frameworks like Node.js, hosting JavaScript on the server side has become not just a possibility but a preferred choice for many developers.
      
        The advantages of hosting JavaScript are numerous. One of the primary benefits is the seamless integration between the frontend and backend, allowing for a unified language stack. This simplifies development workflows, as developers can use the same language, data structures, and libraries across the entire application.
      
        Additionally, JavaScript hosting facilitates the creation of real-time applications, enabling features such as live updates, instant messaging, and collaborative editing. This real-time capability is a game-changer for applications that require timely data synchronization and responsiveness.
      
        As the ecosystem around JavaScript continues to expand, hosting providers are adapting to accommodate the specific needs of JavaScript developers. They offer scalable infrastructure, robust support for modern frameworks and libraries, and tools to streamline deployment processes.
      
        The image of 'javascript_image.jpg' encapsulates the essence of this excitement, depicting the dynamic and vibrant nature of JavaScript development. Whether you are a seasoned developer or a newcomer to the world of web development, the era of JS hosting opens up a world of possibilities, inspiring innovation and creativity in the ever-evolving digital landscape.`,
        category_id: 1,
        user_id: 22654,
        status_id: 3,
        image: 'javascript_image.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: 'Test Hosting #2',
        content: 'Excitement about hosting JavaScript. Opens up possibilities!',
        category_id: 1,
        user_id: 2201,
        status_id: 4,
        image: 'javascript_image.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        title: 'Web Frameworks',
        content: 'Favorite web hosting frameworks? Using React, want to explore others.',
        category_id: 2,
        user_id: 2202,
        status_id: 1,
        image: 'frameworks_comparison.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        title: 'Efficient Coding Tips',
        content: 'Share tips for clean server-side code. Start with meaningful variable names!',
        category_id: 1,
        user_id: 2203,
        status_id: 2,
        image: 'coding_tips.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        title: 'Advanced Coding Tips',
        content: 'Share tips for clean server-side code. Start with meaningful variable names!',
        category_id: 1,
        user_id: 2204,
        status_id: 2,
        image: 'coding_tips.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        title: 'Pro Coding Tips',
        content: 'Share tips for clean server-side code. Start with meaningful variable names!',
        category_id: 1,
        user_id: 2205,
        status_id: 2,
        image: 'coding_tips.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        title: 'Top Hosting Books',
        content: 'Looking for good books on server hosting. Any recommendations?',
        category_id: 3,
        user_id: 2206,
        status_id: 1,
        image: 'programming_books.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        title: 'Hosting Challenges',
        content: 'Share challenging server hosting debugging experiences. Learn from each other!',
        category_id: 2,
        user_id: 2207,
        status_id: 3,
        image: 'debugging_challenges.gif',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        title: 'Debugging Stories',
        content: 'Share challenging server hosting debugging experiences. Learn from each other!',
        category_id: 2,
        user_id: 2208,
        status_id: 3,
        image: 'debugging_challenges.gif',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        title: 'Update Hosting Status',
        content: 'Share challenging server hosting debugging experiences. Learn from each other!',
        category_id: 2,
        user_id: 2209,
        status_id: 4,
        image: 'debugging_challenges.gif',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        title: 'Cloud JS Hosting',
        content: 'Explore cloud-based hosting solutions for JavaScript. Enhanced possibilities!',
        category_id: 1,
        user_id: 2209,
        status_id: 3,
        image: 'cloud_javascript_image.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 12,
        title: 'Test Hosting #3',
        content: 'Excitement about testing JavaScript hosting. Opens up more possibilities!',
        category_id: 1,
        user_id: 22654,
        status_id: 4,
        image: 'test_javascript_image.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13,
        title: 'Top Web Frameworks',
        content: 'Explore the top web hosting frameworks. Using React? Discover other options.',
        category_id: 2,
        user_id: 2208,
        status_id: 1,
        image: 'top_frameworks_comparison.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 14,
        title: 'Server-side Coding Tips',
        content: 'Share tips for clean and efficient server-side code. Start with meaningful variable names!',
        category_id: 1,
        user_id: 2206,
        status_id: 2,
        image: 'efficient_coding_tips.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 15,
        title: 'Advanced Server Coding Tips',
        content: 'Share advanced tips for clean server-side code. Start with meaningful variable names!',
        category_id: 1,
        user_id: 2203,
        status_id: 2,
        image: 'advanced_coding_tips.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 16,
        title: 'Pro Server Coding Tips',
        content: 'Share professional tips for clean server-side code. Start with meaningful variable names!',
        category_id: 1,
        user_id: 2200,
        status_id: 2,
        image: 'pro_coding_tips.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 17,
        title: 'Recommended Hosting Books',
        content: 'Looking for recommended books on server hosting. Any suggestions?',
        category_id: 3,
        user_id: 2203,
        status_id: 1,
        image: 'recommended_books.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 18,
        title: 'Hosting Debugging Challenges',
        content: 'Share your most challenging debugging experiences in server hosting. Learn together!',
        category_id: 2,
        user_id: 2204,
        status_id: 3,
        image: 'hosting_debugging_challenges.gif',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 19,
        title: 'Server Debugging Stories',
        content: 'Share your most challenging debugging experiences in server hosting. Learn together!',
        category_id: 2,
        user_id: 2205,
        status_id: 3,
        image: 'server_debugging_stories.gif',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 20,
        title: 'Hosting Status Update',
        content: 'Share your most challenging debugging experiences in server hosting. Learn together!',
        category_id: 2,
        user_id: 2200,
        status_id: 4,
        image: 'hosting_status_update.gif',
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
