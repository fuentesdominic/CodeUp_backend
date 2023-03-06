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

router.get("/html", controller.GetHtmlTasks);
router.get("/css", controller.GetCssTasks);
router.get("/javascript", controller.GetJsTasks);
router.get("/react", controller.GetReactTasks);

module.exports = router;
