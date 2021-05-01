const bidPost = [
  {
    type: "list",
    message: "Do you want to post an item or bid on an item?",
    choices: ["Bid", "Post", "Exit"],
    name: "inputBidPost",
  },
];

const itemSelection = [
  {
    type: "input",
    message: "Enter the item name you want to bid on: ",
    name: "itemName",
  },
];

const bidAmount = [
  {
    type: "input",
    message: "Enter your name: ",
    name: "name",
  },
  {
    type: "input",
    message: "Enter your bid amount in dollars: ",
    name: "bidAmount",
  },
];

const itemInfo = [
  { type: "input", message: "What is your item name: ", name: "itemName" },
  { type: "input", message: "Describe your item: ", name: "itemDescription" },
];

module.exports = {
  bidPost,
  itemSelection,
  bidAmount,
  itemInfo,
};
