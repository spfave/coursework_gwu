/*
1. Prompt for POST or BID

2a if POST
2a. prompt of item details
2c. insert item in db

1b. if BID
2b show all item details
2c allow item selection or POST/BID screen
2d prompt for bid amount
2e perform bid analysis and provide response

2e1 if higher bid
2e1a replace previous bid with new higher bid

2e2 if bid lower
2e2a return user to 2c

database: bids_db
table: bids
columns: 
id    item name    description    bid-amount    bidder-id

*/

// Packages
const inquirer = require("inquirer");
const mysql = require("mysql");
const prompts = require("./prompts");

// DB connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "greatBay_DB",
});

// Functions
let app = true;
async function greatBay() {
  while (app) await chooseBidPost();
}

async function chooseBidPost() {
  res = await inquirer.prompt(prompts.bidPost);

  switch (res.inputBidPost) {
    case "Bid":
      console.log("Test Bid");
      // bidOption();
      break;

    case "Post":
      console.log("Test Post");
      // postOption();
      break;

    default:
      //Exit
      console.log("Exit");
      app = false;
      connection.end();
      break;
  }
}

function bidOption() {
  // Show all items in db
  inquirer.prompt(prompts.itemSelection).then((res) => {
    inquirer.prompt(prompts.bidAmount).then((res) => {
      // preform bid amount comparison
    });
  });
}

function postOption() {
  inquirer.prompt(prompts.itemInfo).then((res) => {
    // add item to db
  });
}

// Script Operation
connection.connect((err) => {
  if (err) throw new Error(err);
  greatBay();
});
