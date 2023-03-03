'use strict';
const { User, Category } = require('../models')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tasks', [
      //HTML
      {
        title: 'Lesson 1: Introduction to HTML',
        content: 'Learn about the basics of HTML, its syntax, and its role in creating web pages. Understand the structure of an HTML document and the purpose of HTML tags. Practice creating a simple HTML document with a text editor and viewing it in a web browser',
        videoLink: 'https://www.youtube.com/watch?v=mJgBOIoGihA&list=PL0Zuz27SZ-6M1Uopt6_VL3gf3cpMnwavm&ab_channel=DaveGray',
        category: 'HTML'
      },
      {
        title: 'Lesson 2: HTML Tags and Elements',
        content: 'Understanding the difference between HTML tags and elements. Common HTML tags and their uses. How to use HTML attributes to add additional information to HTML elements. How to create links using the anchor tag',
        videoLink: 'https://www.youtube.com/watch?v=mJgBOIoGihA&list=PL0Zuz27SZ-6M1Uopt6_VL3gf3cpMnwavm&ab_channel=DaveGray',
        category: 'HTML'
      },
      {
        title: 'Lesson 3: Formatting HTML Content',
        content: 'How to use headings and paragraphs to structure content. How to add emphasis using bold and italic tags. How to create lists using unordered and ordered list tags. How to use the line break tag to create white space',
        videoLink: 'https://www.youtube.com/watch?v=mJgBOIoGihA&list=PL0Zuz27SZ-6M1Uopt6_VL3gf3cpMnwavm&ab_channel=DaveGray',
        category: 'HTML'
      },

      //CSS

      {
        title: 'Lesson 1: Introduction to CSS',
        content: 'What is CSS and why is it important? Understanding the box model.Basic syntax of CSS.',
        videoLink: 'https://www.youtube.com/watch?v=pYaamz6AyvU&list=PL0Zuz27SZ-6M8znNpim8dRiICRrP5HPft&ab_channel=DaveGray',
        category: 'CSS'
      },
      {
        title: 'Lesson 2: Selectors and Properties',
        content: 'Different types of selectors (element, class, ID, attribute). Common properties in CSS(color, font, margin, padding). Importance of specificity in selector hierarchy',
        videoLink: 'https://www.youtube.com/watch?v=pYaamz6AyvU&list=PL0Zuz27SZ-6M8znNpim8dRiICRrP5HPft&ab_channel=DaveGray',
        category: 'CSS'
      },
      {
        title: 'Lesson 3: Layout and Positioning',
        content: 'Display property and its values (block, inline, inline-block). Position property and its values(static, relative, absolute, fixed). Float and clear properties',
        videoLink: 'https://www.youtube.com/watch?v=pYaamz6AyvU&list=PL0Zuz27SZ-6M8znNpim8dRiICRrP5HPft&ab_channel=DaveGray',
        category: 'CSS'
      },

      //Javascript

      {
        title: 'Lesson 1: Introduction to JavaScript',
        content: 'What is JavaScript and its role in web development? Basic syntax and data types. Variables, constants, and data structures',
        videoLink: 'https://www.youtube.com/watch?v=SajRjc9KKUE&list=PL0Zuz27SZ-6Oi6xNtL_fwCrwpuqylMsgT&ab_channel=DaveGray',
        category: 'JavaScript'
      },
      {
        title: 'Lesson 2: Control Flow and Loops',
        content: 'Conditional statements (if/else, switch). Looping structures(for, while, do-while). Control flow statements(break, continue, return) ',
        videoLink: 'https://www.youtube.com/watch?v=SajRjc9KKUE&list=PL0Zuz27SZ-6Oi6xNtL_fwCrwpuqylMsgT&ab_channel=DaveGray',
        category: 'JavaScript'
      },
      {
        title: 'Lesson 3: Functions and Objects',
        content: 'Creating functions and passing arguments. Anonymous functions and closures.Object- oriented programming concepts',
        videoLink: 'https://www.youtube.com/watch?v=SajRjc9KKUE&list=PL0Zuz27SZ-6Oi6xNtL_fwCrwpuqylMsgT&ab_channel=DaveGray',
        category: 'JavaScript'
      },

      //React

      {
        title: 'Lesson 1: Introduction to React',
        content: 'Understand the basics of React and its purpose in building user interfaces. Learn the difference between React and other UI libraries/ frameworks. Familiarize yourself with the React component model and JSX syntax',
        videoLink: 'https://www.youtube.com/watch?v=TeeAp5zkYnI&list=PL0Zuz27SZ-6PrE9srvEn8nbhOOyxnWXfp&ab_channel=DaveGray',
        category: 'React'
      },
      {
        title: 'Lesson 2: Setting up a React Development Environment',
        content: 'Learn how to set up a development environment for React. Install and configure Node.js and npm/ yarn. Install and configure a code editor(e.g.Visual Studio Code. Understand the importance of project organization and structure',
        videoLink: 'https://www.youtube.com/watch?v=TeeAp5zkYnI&list=PL0Zuz27SZ-6PrE9srvEn8nbhOOyxnWXfp&ab_channel=DaveGray',
        category: 'React'
      },
      {
        title: 'Lesson 3: Creating React Components',
        content: 'Learn how to create functional and class-based components. Understand the component lifecycle and when to use each method. Learn how to use props and state to manage data and pass information between components',
        videoLink: 'https://www.youtube.com/watch?v=TeeAp5zkYnI&list=PL0Zuz27SZ-6PrE9srvEn8nbhOOyxnWXfp&ab_channel=DaveGray',
        category: 'React'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
  }
};
