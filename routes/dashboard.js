const router = require("express").Router();
const { dashboard } = require("../controllers");
// const layoutName = (req, res, next) => {
//   res.locals.layout = `layouts/${layoutName}`;
//   next();
// };

// router.use(layoutName("dashboard"));
router.use(function (req, res, next) {
  res.locals.layouts = "layouts/dashboard";
  next();
});
router.use(function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("./auth/login");
});
router.get("/", dashboard.home);
router.get("/post", dashboard.post.index);

module.exports = router;
