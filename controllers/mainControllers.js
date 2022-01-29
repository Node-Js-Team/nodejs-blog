const getMain = async(req, res) => {
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