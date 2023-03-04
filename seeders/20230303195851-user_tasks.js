'use strict';
const { User, Task } = require('../models')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usertasks', [{
      userId: 1,
      taskId: 1,
      notes: "console.log('Hello World!')",
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      taskId: 2,
      notes: "I learned fast",
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      taskId: 3,
      notes: "need to relearn this",
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      taskId: 4,
      notes: "need to relearn this",
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ])
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('usertasks', null, {});

  }
};
