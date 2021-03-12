var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");

var message =
  "Some say the world will end in fire 🔥, Some say in ice 🧊. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var words = message.split(" ");

function countdown() {
  let timeLeft = 5;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  const timeInterval = setInterval(function () {
    // YOUR CODE HERE

    // Countdown time interval and display to screen
    if (timeLeft > 1) {
      timerEl.textContent = `Get ready to speed read in ${timeLeft} seconds`;
      // timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = `Get ready to speed read in ${timeLeft} second`;
    } else {
      // else timeLeft <= 0
      // At countdown end clear time interval and call displayMessage function
      timerEl.textContent = "";
      clearInterval(timeInterval);
      displayMessage();
    }
    timeLeft--;
  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  let wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 250);
}

countdown();
