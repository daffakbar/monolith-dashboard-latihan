const passport = require("../../lib/passport");

module.exports = {
  login: passport.authenticate("local", {
    successRedirect: "./dashboard",
    failureRedirect: "./auth/login",
  }),
};
