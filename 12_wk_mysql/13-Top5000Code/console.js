const inquirer = require("inquirer");
const mysql = require("mysql");

// Connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "top_songsDB",
});

// Functions
async function start() {
  const res = await inquirer.prompt({
    type: "rawlist",
    message: "Select which query you would like to perform ",
    choices: [
      "Search songs by artist",
      "Show artists with multiple hits in top 5000",
      "Search by range",
      "Search by song",
      "Exit",
    ],
    name: "query",
  });

  switch (res.query) {
    case "Search songs by artist":
      await searchByArtist();
      break;
    case "Show artists with multiple hits in top 5000":
      await multiple5000Artists();
      break;
    case "Search by range":
      await searchByRange();
      break;
    case "Search by song":
      await searchBySong();
      break;

    default:
      connection.end();
      break;
  }
}

async function searchByArtist() {
  const res = await inquirer.prompt({
    type: "input",
    message: "Enter an artist name",
    name: "artist",
  });

  connection.query(
    "SELECT * FROM top5000 WHERE ?",
    { artist: res.artist },
    (err, data) => {
      if (err) throw new Error(err);
      if (data.length) {
        console.table(data);
      } else {
        console.log(`No songs found for ${res.artist}\n`);
      }

      start();
    }
  );
}

async function multiple5000Artists() {
  connection.query(
    `
    SELECT artist, COUNT(artist)
    FROM top5000
    GROUP BY artist
    HAVING COUNT(artist) > 1
    ORDER BY COUNT(artist) DESC, artist
  `,
    (err, data) => {
      if (err) throw new Error(err);
      console.table(data);

      start();
    }
  );
}

async function searchByRange() {
  const res = await inquirer.prompt([
    {
      type: "input",
      message: "Enter lower bound song range",
      name: "lowerBound",
    },
    {
      type: "input",
      message: "Enter upper bound song range",
      name: "upperBound",
    },
  ]);

  // Validate lower and upper bound relation

  connection.query(
    `
    SELECT id, song, artist, year
    FROM top5000
    WHERE id BETWEEN ? AND ?
    `,
    [res.lowerBound, res.upperBound],
    (err, data) => {
      if (err) throw new Error(err);
      console.table(data);

      start();
    }
  );
}

async function searchBySong() {
  const res = await inquirer.prompt({
    type: "input",
    message: "Enter a song name",
    name: "song",
  });

  connection.query(
    "SELECT * FROM top5000 WHERE ?",
    { song: res.song },
    (err, data) => {
      if (err) throw new Error(err);
      if (data.length) {
        console.table(data);
      } else {
        console.log(`No song found for song title: ${res.song}`);
      }

      start();
    }
  );
}

// Execution
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);

  start();
  // connection.end();
});
