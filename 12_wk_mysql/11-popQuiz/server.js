const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "my_DB",
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  queryAllDB();
});

function queryAllDB() {
  connection.query("SELECT * FROM myTable", (err, res) => {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}
