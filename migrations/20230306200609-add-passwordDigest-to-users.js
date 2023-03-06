"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("users", "passwordDigest", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("users", "passwordDigest");
  },
};
