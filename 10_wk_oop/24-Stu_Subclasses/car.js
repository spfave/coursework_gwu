// TODO: Import the parent class
const Vehicle = require("./vehicle");

// TODO: Create a `Car` class that extends the `Vehicle` class
class Car extends Vehicle {
  constructor(id, color, passengers) {
    super(id, 4, "beep");

    this.color = color;
    this.passengers = passengers;
  }

  useHorn() {
    console.log(this.sound);
  }

  checkPassengers() {
    const numPassengers = this.passengers.length;
    if (numPassengers <= 4) {
      console.log(`There are ${4 - numPassengers} remaining spots in the car`);
    } else {
      console.log("You have too many passengers, this car only seats 4 people");
    }
  }
}

// Run
const carPassengers = [
  "Aristotle",
  "Confucius",
  "Socrates",
  "Lao-Tzu",
  "Plato",
];

const car = new Car(15, "blue", carPassengers);

console.log("---CAR---");
car.printInfo();
car.useHorn();
car.checkPassengers();
