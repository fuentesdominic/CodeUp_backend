const router = require("express").Router();
const controller = require("../controllers/TaskController");
const middleware = require("../middleware");

router.get("/", controller.GetTasks);
router.post(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateTask
);
router.put(
  "/:post_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateTask
);
router.delete(
  "/:post_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteTask
);

module.exports = router;
