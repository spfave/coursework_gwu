// TODO: What are we importing?
// Importing node standard library package for file system handling
const fs = require("fs");

// TODO: Add comments to explain each of the three arguments of appendFile()
/**
 * 1: file name if in same folder, or folder path if in different folder
 * 2: string to be written (appended) to file
 * 3: callback function to be executed after asynchronous appendFile finishes execution
 */
fs.appendFile("log.txt", `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  // condition statement ? return if true : return if false
  err ? console.error(err) : console.log("Commit logged!")
);
