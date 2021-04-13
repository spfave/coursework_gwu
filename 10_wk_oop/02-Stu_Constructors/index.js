// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'

// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech

// TODO: Create a new object using the 'Developer' constructor

// TODO: Call the 'introduction()' method on the new object

class Developer {
  constructor(name, tech) {
    this.name = name;
    this.tech = tech;
  }

  introduction() {
    console.log(
      `Hi, my name is ${this.name} and my favorite tech is ${this.tech}.`
    );
  }
}

const sebDev = new Developer("Sebastian", "mechanical keyboards");

sebDev.introduction();
