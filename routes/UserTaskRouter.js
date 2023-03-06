const router = require("express").Router();
const controller = require("../controllers/UserTaskController");
const middleware = require("../middleware");

router.get("/", controller.GetUserTasks);
router.get('/html', controller.GetHtmlNotes)
router.get('/css', controller.GetCSSNotes)
router.get('/javascript', controller.GetJavaScriptNotes)
router.get('/react', controller.GetReactNotes)
router.post(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateUserTask
);
router.put(
  "/:usrtask_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateUserTask
);
router.delete(
  "/:usrtask_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteUserTask
);

module.exports = router;
