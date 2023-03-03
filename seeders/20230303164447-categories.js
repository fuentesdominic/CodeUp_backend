'use strict';
const { User } = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const u = await User.findAll({ raw: true })
    await queryInterface.bulkInsert('categories', [
      {
        name: 'HTML',
        description: 'HTML (Hypertext Markup Language) is a markup language used to create the structure and content of web pages. It defines the layout of the page, including headings, paragraphs, images, and other content elements',
        image: 'https://cdn-icons-png.flaticon.com/512/919/919827.png'
      },
      {
        name: 'CSS',
        description: 'CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation and visual styling of web pages written in HTML and XHTML. It allows web designers to control the layout, typography, colors, and other visual aspects of a website, creating a consistent and visually appealing user experience across different devices and platforms.',
        image: 'https://cdn-icons-png.flaticon.com/512/919/919827.png'
      },
      {
        name: 'JavaScript',
        description: 'JavaScript is a programming language that is primarily used to create interactive web applications. It allows developers to add dynamic behavior to web pages, such as animations, user input validation, and data manipulation.',
        image: 'https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png'
      },
      {
        name: 'React',
        description: 'React is an open-source JavaScript library used for building user interfaces and web applications. It allows developers to create reusable UI components, manage application state, and handle user input in a declarative and efficient way. React uses a virtual DOM (Document Object Model) to optimize rendering performance and can be used with other libraries or frameworks to build full-stack web applications.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
