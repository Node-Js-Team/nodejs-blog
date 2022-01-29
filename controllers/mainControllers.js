const getMain = async(req, res) => {
    res.render("index", { title: "Ana Sayfa" });
};



module.exports = {
    getMain,
}