var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testing"
});

con.connect(function(err) {
  if (err) throw err;
  
});
con.query("SELECT * FROM test", function (err, result, fields) {
  if (err,result) {
    result = result;
  }
});