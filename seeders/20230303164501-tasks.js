'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tasks', [
      {
        title: 'Lesson 1: Introduction to HTML',
        content: 'Learn about the basics of HTML, its syntax, and its role in creating web pages. Understand the structure of an HTML document and the purpose of HTML tags. Practice creating a simple HTML document with a text editor and viewing it in a web browser',
        title: 'Lesson 2: HTML Tags and Elements',
        content: 'Understanding the difference between HTML tags and elements. Common HTML tags and their uses. How to use HTML attributes to add additional information to HTML elements. How to create links using the anchor tag',
        title: 'Lesson 3: Formatting HTML Content',
        content: 'How to use headings and paragraphs to structure content. How to add emphasis using bold and italic tags. How to create lists using unordered and ordered list tags. How to use the line break tag to create white space',
        videoLink: 'https://www.youtube.com/watch?v=mJgBOIoGihA&list=PL0Zuz27SZ-6M1Uopt6_VL3gf3cpMnwavm&ab_channel=DaveGray'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
  }
};
