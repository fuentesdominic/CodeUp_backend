const router = require("express").Router();
const controller = require("../controllers/TaskController");
const middleware = require("../middleware");

router.get("/",
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetTasks);

router.post(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateTask
);
router.put(
  "/:task_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateTask
);
router.delete(
  "/:task_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteTask
);

router.get("/html",
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetHtmlTasks);
router.get("/css",
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetCssTasks);
router.get("/javascript",
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetJsTasks);
router.get("/react",
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetReactTasks);
router.get("/:id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetTaskById);

module.exports = router;
