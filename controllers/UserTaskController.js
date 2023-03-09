const { UserTask } = require("../models");

const GetUserTasks = async (req, res) => {
  try {
    const userTasks = await UserTask.findAll();
    res.send(userTasks);
  } catch (error) {
    throw error;
  }
};

const AddTasksToUser = async (req, res) => {
  try {
    const { user_id, task_id } = req.params;
    const userId = parseInt(user_id);
    if (!user || !task) {
      return res
        .status(404)
        .send({ status: "Error", msg: "User or task not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "Error", msg: "An error has occurred!" });
  }
};

const GetUserTaskByTaskId = async (req, res) => {
  try {
    const taskId = parseInt(req.params.id);
    const userId = parseInt(req.params.userId);
    const notes = await UserTask.findAll({
      where: { taskId: taskId, userId: userId },
    });
    res.send(notes);
  } catch (error) {
    throw error;
  }
};

const CreateUserTask = async (req, res) => {
  try {
    const userTask = await UserTask.create(
      { ...req.body },
      { where: { id: req.params.usrtask_id }, returning: true }
    );
    res.send(userTask);
  } catch (error) {
    throw error;
  }
};

const CreateTaskByTaskId = async (req, res) => {
  try {
    const taskId = parseInt(req.params.taskId);
    const userId = parseInt(req.params.userId);
    console.log(taskId, userId);
    const usertask = await UserTask.create(
      { userId: userId, taskId: taskId },
      {
        where: { taskId: taskId, userId: userId },
      }
    );

    res.send(usertask);
  } catch (error) {
    throw error;
  }
};

const UpdateUserTask = async (req, res) => {
  try {
    const userTask = await UserTask.update(
      { ...req.body },
      {
        where: { taskId: +req.params.taskId, userId: +req.params.userId },
        returning: true,
      }
    );
    res.send(userTask);
  } catch (error) {
    throw error;
  }
};

const DeleteUserTask = async (req, res) => {
  try {
    await UserTask.destroy({
      where: { taskId: +req.params.taskId, userId: +req.params.userId },
    });
    res.send({
      msg: "Task Deleted",
      status: "Ok",
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetUserTasks,
  CreateUserTask,
  UpdateUserTask,
  DeleteUserTask,
  GetUserTaskByTaskId,
  AddTasksToUser,
  CreateTaskByTaskId,
};
