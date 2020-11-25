// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "r1bsyfx4gbowdsis.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "tyqikzit7g5xdqqt",
    password: "fof1z32e9he8cadx",
    database: "a03u7ksi89yqiqev"
});

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
