const moment = require("moment");
const posts = [
  { id: 1, title: "Lorem Ipsum", body: "Dolorsit amet", createdAt: Date() },
  { id: 2, title: "Lorem Ipsum", body: "Dolorsit amet", createdAt: Date() },
];

module.exports = {
  index: (req, res) => {
    const locals = {
      data: {
        posts: posts.map((i) => {
          i.fromNow = moment(i.createdAt).fromNow();
          return i;
        }),
      },
      contentName: "Post",
      layout: "layouts/dashboard",
    };
    res.render("pages/dashboard/post", locals);
  },
};
