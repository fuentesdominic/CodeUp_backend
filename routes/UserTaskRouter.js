const router = require("express").Router();
const controller = require("../controllers/UserTaskController");
const middleware = require("../middleware");

router.get("/", controller.GetUserTasks);
router.get('/html', controller.GetHtmlNotes)
router.get('/:id/htmlone', controller.GetHtmlOne)
router.get('/:id/htmltwo', controller.GetHtmlTwo)
router.get('/:id/htmlthree', controller.GetHtmlThree)
router.get('/:id/css', controller.GetCssNotes)
router.get('/:id/cssone', controller.GetCssOne)
router.get('/:id/csstwo', controller.GetCssTwo)
router.get('/:id/cssthree', controller.GetCssThree)
router.get('/:id/js', controller.GetJavaScriptNotes)
router.get('/:id/jsone', controller.GetJavaScriptOne)
router.get('/:id/jstwo', controller.GetJavaScriptTwo)
router.get('/:id/jsthree', controller.GetJavaScriptThree)
router.get('/:id/react', controller.GetReactNotes)
router.get('/:id/reactone', controller.GetReactOne)
router.get('/:id/reacttwo', controller.GetReactTwo)
router.get('/:id/reactthree', controller.GetReactThree)
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
