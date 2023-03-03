"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("tasks", "userId", {
      type: Sequelize.STRING,
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("tasks", "userId");
  },
};
