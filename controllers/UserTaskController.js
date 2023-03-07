const { UserTask } = require("../models");

const GetUserTasks = async (req, res) => {
  try {
    const userTasks = await UserTask.findAll();
    res.send(userTasks);
  } catch (error) {
    throw error;
  }
};

const GetUserTaskByTaskId = async (req, res) => {
  try {
    const taskId = parseInt(req.params.id)
    const notes = await UserTask.findAll({ where: { taskId: taskId } })
    console.log(notes)
    res.send(notes)
  } catch (error) {
    throw error;
  }
};

const CreateUserTask = async (req, res) => {
  try {
    const userTask = await UserTask.create({ ...req.body },
      { where: { id: req.params.usrtask_id }, returning: true });
    res.send(userTask);
  } catch (error) {
    throw error;
  }
};


const UpdateUserTask = async (req, res) => {
  try {
    const userTask = await UserTask.update(
      { ...req.body },
      { where: { id: req.params.usrtask_id }, returning: true }
    );
    res.send(userTask);
  } catch (error) {
    throw error;
  }
};

const DeleteUserTask = async (req, res) => {
  try {
    await UserTask.destroy({ where: { id: req.params.usrtask_id } });
    res.send({
      msg: "Task Deleted",
      payload: req.params.usrtask_id,
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
  GetUserTaskByTaskId

};
