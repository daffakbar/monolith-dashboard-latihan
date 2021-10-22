module.exports = {
  home: (req, res) => res.render("pages/default/home"),
  notFound: (req, res) => res.render("pages/default/not-found"),
  exception: (req, res) => res.render("pages/default/exception"),

  dashboard: require("./dashboard"),
  auth: require("./auth"),
};
