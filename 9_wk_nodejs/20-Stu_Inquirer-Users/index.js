// MODULES
const fs = require("fs");
const inquirer = require("inquirer");

// Prompt user with questions
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name",
      name: "name",
    },
    {
      type: "checkbox",
      message: "What languages do you know?",
      choices: ["HTML", "CSS", "JS", "Python", "Java"],
      name: "languages",
    },
    {
      type: "list",
      message: "What is your preferred method of communication?",
      choices: ["Visual", "Audio", "Telepathy"],
      name: "communication",
    },
  ])
  .then((response) => {
    // Write response to file
    // console.log(response);

    const fileName = response.name.toLowerCase().split(" ").join("");
    // Could use template instead of hard coded string literal for improved code functionality
    // const fileData = `
    //   Name: ${response.name}
    //   Languages: ${response.languages.join(", ")}
    //   Communication style: ${response.communication}
    // `;

    fs.writeFile(
      `${fileName}.txt`,
      JSON.stringify(response, null, "\t"),
      // fileData,
      (err) => (err ? console.error(err) : console.log("Success!"))
    );
  });
