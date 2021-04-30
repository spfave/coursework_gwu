const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "playlistDB",
});

function afterConnection() {
  db.query("SELECT * FROM songs", (err, res) => {
    if (err) throw new Error(err);
    console.log(res);
    db.end();
  });
}

function songsFilter(value) {
  db.query("SELECT * FROM songs WHERE genre = ?", [value], (err, res) => {
    if (err) throw new Error(err);
    console.log(res);
    db.end();
  });
}

db.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${db.threadId}`);
  // afterConnection();
  songsFilter("pop");
});
