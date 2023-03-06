const { UserTask } = require("../models");

const GetUserTasks = async (req, res) => {
  try {
    const userTasks = await UserTask.findAll();
    res.send(userTasks);
  } catch (error) {
    throw error;
  }
};

const CreateUserTask = async (req, res) => {
  try {
    const userTask = await UserTask.create({ ...req.body });
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

const GetHtmlNotes = async (req, res) => {
  try {
    const notes = await UserTask.findAll({ where: { taskId: [1, 2, 3] } });
    res.send(notes);
  } catch (error) {
    throw error;
  }
};

const GetHtmlOne = async (req, res) => {
  try {
    const notes = await UserTask.findAll({ where: { taskId: 1 } });
    res.send(notes);
  } catch (error) {
    throw error;
  }
};

const GetHtmlTwo = async (req, res) => {
  try {
    const notes = await UserTask.findAll({ where: { taskId: 2 } });
    res.send(notes);
  } catch (error) {
    throw error;
  }
};

const GetHtmlThree = async (req, res) => {
  try {
    const notes = await UserTask.findAll({ where: { taskId: 3 } });
    res.send(notes);
  } catch (error) {
    throw error;
  }
};

const GetCssNotes = async (req, res) => {
  try {
    const notes = await UserTask.findAll({ where: { taskId: [4, 5, 6] } });
    res.send(notes);
  } catch (error) {
    throw error;
  }
};
const GetCssOne = async (req, res) => {
  try {
    const notes = await UserTask.findAll({ where: { taskId: 4 } });
    res.send(notes);
  } catch (error) {
    throw error;
  }
};

const GetCssTwo = async (req, res) => {
  try {
    const notes = await UserTask.findAll({ where: { taskId: 5 } });
    res.send(notes);
  } catch (error) {
    throw error;
  }
};

const GetCssThree = async (req, res) => {
  try {
    const notes = await UserTask.findAll({ where: { taskId: 6 } });
    res.send(notes);
  } catch (error) {
    throw error;
  }
};

const GetJavaScriptNotes = async (req, res) => {
  try {
    const notes = await UserTask.findAll({ where: { taskId: [7, 8, 9] } });
    res.send(notes);
  } catch (error) {
    throw error;
  }
};

const GetJavaScriptOne = async (req, res) => {
  try {
    const notes = await UserTask.findAll({ where: { taskId: 7 } });
    res.send(notes);
  } catch (error) {
    throw error;
  }
};

const GetJavaScriptTwo = async (req, res) => {
  try {
    const notes = await UserTask.findAll({ where: { taskId: 8 } });
    res.send(notes);
  } catch (error) {
    throw error;
  }
};

const GetJavaScriptThree = async (req, res) => {
  try {
    const notes = await UserTask.findAll({ where: { taskId: 0 } });
    res.send(notes);
  } catch (error) {
    throw error;
  }
};


const GetReactNotes = async (req, res) => {
  try {
    const notes = await UserTask.findAll({ where: { taskId: [10, 11, 12] } });
    res.send(notes);
  } catch (error) {
    throw error;
  }
};

const GetReactOne = async (req, res) => {
  try {
    const notes = await UserTask.findAll({ where: { taskId: 10 } });
    res.send(notes);
  } catch (error) {
    throw error;
  }
};

const GetReactTwo = async (req, res) => {
  try {
    const notes = await UserTask.findAll({ where: { taskId: 11 } });
    res.send(notes);
  } catch (error) {
    throw error;
  }
};

const GetReactThree = async (req, res) => {
  try {
    const notes = await UserTask.findAll({ where: { taskId: 12 } });
    res.send(notes);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetUserTasks,
  CreateUserTask,
  UpdateUserTask,
  DeleteUserTask,
  GetHtmlNotes,
  GetHtmlOne,
  GetHtmlTwo,
  GetHtmlThree,
  GetCssNotes,
  GetCssOne,
  GetCssTwo,
  GetCssThree,
  GetJavaScriptNotes,
  GetJavaScriptOne,
  GetJavaScriptTwo,
  GetJavaScriptThree,
  GetReactNotes,
  GetReactOne,
  GetReactTwo,
  GetReactThree,

};
