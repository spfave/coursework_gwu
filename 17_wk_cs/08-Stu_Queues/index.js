// create the Queue class with two methods to remove and add an element
class Queue {
  constructor(container = []) {
    this.container = container;
  }

  addToQueue(item) {
    this.container.push(item);
  }

  removeFromQueue() {
    return this.container.shift();
  }
}

module.exports = Queue;
