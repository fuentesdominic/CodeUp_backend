"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.BelongsToMany(models.User, {
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
      userId: DataTypes.INTEGER
      //delete^
    },
    {
      sequelize,
      modelName: "Task",
      tableName: "tasks",
    }
  );
  return Task;
};
