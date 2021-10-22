const router = require("express").Router();
const { auth } = require("../controllers");
// const layoutName = (req, res, next) => {
//   res.locals.layout = `layouts/${layoutName}`;
//   next();
// };

// router.use(layoutName("dashboard"));
router.use(function (req, res, next) {
  res.locals.layouts = "layouts/auth";
  next();
});
router.get("/login", auth.login);
router.post("/login", auth.api.login);

module.exports = router;
