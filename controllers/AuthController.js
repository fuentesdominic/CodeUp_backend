const { User, Task, UserTask } = require("../models");
const { AddTasksToUser } = require("../controllers/UserTaskController")
const middleware = require("../middleware");

const Register = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    let passwordDigest = await middleware.hashPassword(password);
    const user = await User.create({ email, passwordDigest, name });
    //
    const tasks = await Task.findAll()
    if (tasks && tasks.length > 0) {
      await tasks.forEach(task => {
        UserTask.create({ userId: user.id, taskId: task.id })
      });
      return res.status(201).send(user)
    }
    // return res.send(user);
    // create a function to populate tasks with using join table
    // find userId, task id

  } catch (error) {
    throw error;
  }
};

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      raw: true,
    });

    let matched = await middleware.comparePassword(
      user.passwordDigest,
      req.body.password
    );

    if (matched) {
      let payload = {
        id: user.id,
        email: user.email,
      };

      let token = middleware.createToken(payload);
      return res.send({ user: payload, token });
    }
    res.status(401).send({ status: "Error", msg: "Unauthorized" });
  } catch (error) {
    console.log(error);
    res.status(401).send({ status: "Error", msg: "An error has occurred!" });
  }
};

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    const user = await User.findByPk(req.params.user_id);

    let matched = middleware.comparePassword(
      user.dataValues.passwordDigest,
      oldPassword
    );

    if (matched) {
      let passwordDigest = await middleware.hashPassword(newPassword);
      await user.update({ passwordDigest });
      return res.send({ status: "Ok", payload: user });
    }
    res.status(401).send({ status: "Error", msg: "Unauthorized" });
  } catch (error) {
    console.log(error);
    res.status(401).send({ status: "Error", msg: "An error has occurred!" });
  }
};

const CheckSession = async (req, res) => {
  const { payload } = res.locals;
  res.send(payload);
};

module.exports = {
  Register,
  Login,
  UpdatePassword,
  CheckSession,
};
