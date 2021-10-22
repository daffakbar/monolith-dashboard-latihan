module.exports = {
  home: (req, res) => {
    const locals = {
      data: [{ Post: 10, Visitor: 100, Reader: 10 }],
      contentName: "Statistic",
      layout: "layouts/dashboard",
    };
    res.render("pages/dashboard/home", locals);
  },
  post: require("./post"),
};
