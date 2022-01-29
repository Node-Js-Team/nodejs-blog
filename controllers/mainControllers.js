const getMain = async(req, res) => {
    res.render("index", { title: "Ana Sayfa" });
};

const getMainTwo = async(req, res) => {
    res.render("blog-single", { title: "Blog Single" });
};

const getMainThree = async(req, res) => {
    res.render("blog-list", { title: "Blog List" });
};


module.exports = {
    getMain,
    getMainTwo,
    getMainThree
}