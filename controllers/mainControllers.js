const db = require("../db.js");

const getMain = async (req, res) => {
  let sql = "SELECT * FROM blog";
  db.conn.query(sql, function (err, result) {
    if (err) {
      throw err;
    } else {
      res.render("index", { title: "Ana Sayfa", data: result });
    }
  });
};

const getBlogDetail = async (req, res) => {
  let sql = `SELECT * FROM blog WHERE slug="${req.params.slug}"`;
  db.conn.query(sql, function (err, result) {
    if (err) {
      throw err;
    } else {
      res.render("blog-single", { title: result[0]["title"], data: result });
    }
  });
};

const getCategories = async (req, res) => {
  res.render("blog-list", { title: "Blog List" });
};

module.exports = {
  getMain,
  getBlogDetail,
  getCategories,
};
