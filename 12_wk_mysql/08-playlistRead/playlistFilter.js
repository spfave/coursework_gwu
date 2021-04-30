const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "playlistDB",
});

function showSongs() {
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

function addSong() {
  db.query(
    "INSERT INTO songs SET ?",
    {
      title: "Confetti",
      artist: "Qveen Herby",
      genre: "pop",
    },
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} songs inserted!\n`);
      updateSong();
    }
  );
}

function updateSong(params) {
  db.query(
    "UPDATE songs SET ? WHERE ?",
    [
      {
        genre: "electronic",
      },
      {
        title: "song 1",
      },
    ],
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} songs updated!\n`);
      // Call deleteProduct AFTER the UPDATE completes
      deleteSong();
    }
  );
}

function deleteSong() {
  db.query(
    "DELETE FROM songs WHERE ?",
    {
      artist: "artist 2",
    },
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} songs deleted!\n`);
      // Call readProducts AFTER the DELETE completes
      showSongs();
    }
  );
}

db.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${db.threadId}`);
  // afterConnection();
  // songsFilter("pop");
  addSong();
});
