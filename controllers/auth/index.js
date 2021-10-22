module.exports = {
  login: (req, res) => res.render("pages/authentication/login"),
  //   register: (req, res) => res.render("pages/authenticate/register"),
  api: require("./api"),
};
