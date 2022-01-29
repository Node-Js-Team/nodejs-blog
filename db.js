var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "blog"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

const conn = new mysql.createConnection(con);

exports.module = {
    conn
}