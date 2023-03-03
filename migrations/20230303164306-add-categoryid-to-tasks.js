"use strict";

/** @type {import('sequelize-cli').Migration} */
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("tasks", "categoryId", {
      type: Sequelize.STRING,
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("tasks", "categoryId");
  },
};
