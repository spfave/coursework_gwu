// TODO: Add a comment describing what kind of function this is
// Constructor function
function Character(name, type, age, strength, hitpoints) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
/** Add a function to the Character prototype so it is stored
 * only once in memory and accessible to every object instance
 * of the Character class
 */
Character.prototype.printStats = function () {
  console.log(
    `Name: ${this.name}\nProfession: ${this.type}\nAge: ${this.age}\nStrength: ${this.strength}\nHitPoints: ${this.hitpoints}`
  );
  console.log("\n-------------\n");
};

// TODO: Add a comment describing the functionality of this method
/**
 * Checks if the character instance is alive by checking if their
 * hitpoints value is greater than zero
 */
Character.prototype.isAlive = function () {
  if (this.hitpoints > 0) {
    console.log(`${this.name} is still alive!`);
    console.log("\n-------------\n");
    return true;
  }
  console.log(`${this.name} has died!`);
  return false;
};

// TODO: Add a comment describing the functionality of this method
/**
 * For the character instance on which the method is call takes
 * the strength attribute value and subtracts the value from the
 * hitpoints of the character instance input in the method call
 */
Character.prototype.attack = function (character2) {
  character2.hitpoints -= this.strength;
};

// TODO: Add a comment describing the functionality of this method
/**
 * Increase certain properties of a character instance
 */
Character.prototype.levelUp = function () {
  this.age += 1;
  this.strength += 5;
  this.hitpoints += 25;
};

const warrior = new Character("Crusher", "Warrior", 25, 10, 75);
const rogue = new Character("Dodger", "Rogue", 23, 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);

// TODO: Add a comment describing what you expect to see printed in the console
/**
 * Name: Crusher
 * Profession: Warrior
 * Age: 25
 * Strength: 10
 * HitPoints: 55
 */
warrior.printStats();

// TODO: Add a comment describing what you expect to see printed in the console
/**
 * Crusher is still alive
 * -------------
 */
warrior.isAlive();

rogue.levelUp();

// TODO: Add a comment describing what you expect to see printed in the console
/**
 * Name: Doger
 * Profession: Rogue
 * Age: 24
 * Strength: 25
 * Hitpoints: 75
 */
rogue.printStats();
