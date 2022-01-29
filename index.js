const express = require("express");
const app = express();
const mainRoutes = require('./routes/mainRoutes.js');
const ejsLayouts = require("express-ejs-layouts");
const db = require('./db.js');
app.use(express.json());
var path = require('path')
const bodyParser = require("body-parser");
const dotEnvt = require("dotenv").config();
const BlogSlug = process.env.BlogSlug;

console.log(BlogSlug);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", './resources/View')

app.use(ejsLayouts)
    //ROUTES
app.use(BlogSlug, mainRoutes);
//app.use('admin',adminRoutes);

//404
app.get("*", async(req, res) => {
    res.json({ message: "404" });
});

app.listen(3000, () => {
    console.log("Server Port: 3000");
});