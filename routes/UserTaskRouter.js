const router = require("express").Router();
const controller = require("../controllers/UserTaskController");
const middleware = require("../middleware");

router.get(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetUserTasks
);
router.get(
  "/:id/user/:userId",
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetUserTaskByTaskId
);
router.post(
  "/:usrtask_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateUserTask
);
router.put(
  "/:taskId/user/:userId",
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateUserTask
);
router.delete(
  "/:taskId/user/:userId",
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteUserTask
);

router.post(
  "/:taskId/user/:userId",
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateTaskByTaskId
);

module.exports = router;
