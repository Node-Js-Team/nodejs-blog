const db = require("../db.js");

const getMain = async(req, res) => {
    var obj = {};
    let sql = "SELECT * FROM blog";
    let selectData = db.conn.query(sql, function(err, result, fields) {
        if (err) {
            throw err;
        } else {
            res.render("index", { title: "Ana Sayfa", data: result });
        }

    });


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