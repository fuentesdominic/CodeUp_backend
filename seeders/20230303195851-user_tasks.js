'use strict';
const { User, Task } = require('../models')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tasks', [{
      userId: 1,
      taskId: 1,
      notes: "console.log('Hello World!')",
    },
    {
      userId: 1,
      taskId: 2,
      notes: "I learned fast",
    },
    {
      userId: 1,
      taskId: 3,
      notes: "need to relearn this",
    },
    {
      userId: 1,
      taskId: 4,
      notes: "need to relearn this",
    },
    ])
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('People', null, {});

  }
};
