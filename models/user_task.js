"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_task.init(
    {
      userId: DataTypes.INTEGER,
      taskId: DataTypes.INTEGER,
      notes: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user_task",
      tableName: "user_tasks",
    }
  );
  return user_task;
};
