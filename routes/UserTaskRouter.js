const router = require("express").Router();
const controller = require("../controllers/UserTaskController");
const middleware = require("../middleware");

router.get("/", controller.GetUserTasks);
router.get('/:id', controller.GetUserTaskByTaskId)
router.post(
  "/:usrtask_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateUserTask
);
router.put(
  "/:usrtask_id",
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.UpdateUserTask
);
router.delete(
  "/:usrtask_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteUserTask
);

module.exports = router;
