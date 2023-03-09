"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Task, {
        foreignKey: "userId",
        as: "tasklist",
        through: models.UserTask,
      });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      passwordDigest: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  );
  return User;
};
