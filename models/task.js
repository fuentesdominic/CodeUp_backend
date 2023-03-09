"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      Task.belongsToMany(models.User, {
        foreignKey: 'userId',
        as: 'userlist',
        through: models.UserTask
      })

    }
  }
  Task.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      videoLink: DataTypes.STRING,
      category: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Task",
      tableName: "tasks",
    }
  );
  return Task;
};
