const { Task, User } = require("../models");

const addTask = async (req, res) => {
  try {
    const { user_id, task_id } = req.params;
    const user = await User.findByPk(user_id);
    const task = await Task.findByPk(task_id);
    if (!user || !task) {
      return res.status(404).send({ status: "Error", msg: "User or task not found" });
    }
    await user.addTask(task);
    return res.send({ status: "Ok", msg: "Task added to user" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "Error", msg: "An error has occurred!" });
  }
};

const GetTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.send(tasks);
  } catch (error) {
    throw error;
  }
};

const GetHtmlTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({ where: { category: "HTML" } });
    res.send(tasks);
  } catch (error) {
    throw error;
  }
};

const GetCssTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({ where: { category: "CSS" } });
    res.send(tasks);
  } catch (error) {
    throw error;
  }
};

const GetJsTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({ where: { category: "JavaScript" } });
    res.send(tasks);
  } catch (error) {
    throw error;
  }
};

const GetReactTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({ where: { category: "React" } });
    res.send(tasks);
  } catch (error) {
    throw error;
  }
};

const GetTaskById = async (req, res) => {
  try {
    const taskId = parseInt(req.params.id);
    const tasks = await Task.findByPk(taskId);
    res.send(tasks);
  } catch (error) {
    throw error;
  }
};

const CreateTask = async (req, res) => {
  try {
    const task = await Task.create({ ...req.body });
    res.send(task);
  } catch (error) {
    throw error;
  }
};

const UpdateTask = async (req, res) => {
  try {
    const task = await Task.update(
      { ...req.body },
      { where: { id: req.params.task_id }, returning: true }
    );
    res.send(task);
  } catch (error) {
    throw error;
  }
};

const DeleteTask = async (req, res) => {
  try {
    await Task.destroy({ where: { id: req.params.task_id } });
    res.send({
      msg: "Task Deleted",
      payload: req.params.task_id,
      status: "Ok",
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetTasks,
  CreateTask,
  UpdateTask,
  DeleteTask,
  GetHtmlTasks,
  GetCssTasks,
  GetJsTasks,
  GetReactTasks,
  GetTaskById,
  addTask
};
