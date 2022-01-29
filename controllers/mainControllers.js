const db = require("../db.js");

const getMain = async(req, res) => {
    let selectData = db.conn.query("SELECT * FROM blog", function(err, result, fields) {
        if (err) throw err;
        console.log(result);
    });

    res.render("index", { title: "Ana Sayfa" });
};

const getBlogDetail = async(req, res) => {
    res.render("blog-single", { title: "Blog Single" });
};

const getCategories = async(req, res) => {
    res.render("blog-list", { title: "Blog List" });
};


module.exports = {
    getMain,
    getBlogDetail,
    getCategories
}