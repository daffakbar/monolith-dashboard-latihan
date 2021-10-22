var express = require("express");
var router = express.Router();
const controller = require("../controllers");
const dashboard = require("./dashboard");
const auth = require("./auth");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get("/", controller.home);
router.use("/dashboard", dashboard);
router.use("/auth", auth);
router.use(controller.notFound);
router.use(controller.exception);

module.exports = router;
