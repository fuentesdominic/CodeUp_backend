'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserTask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  UserTask.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'userId',
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    taskId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'taskId',
      onDelete: 'CASCADE',
      references: {
        model: 'tasks',
        key: 'id'
      }
    },
    notes: DataTypes.STRING,
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'UserTask',
    tableName: 'usertasks'
  });
  return UserTask;
};