// Quotes from https://www.brainyquote.com/topics/inspirational-quotes
const quotes = [
  "Keep your face always toward the sunshine - and shadows will fall behind you. - Walt Whitman",
  "It is never too late to be what you might have been. - George Eliot",
  "There are two ways of spreading light: to be the candle or the mirror that reflects it. - Edith Wharton",
  "Put your heart, mind, and soul into even your smallest acts. This is the secret of success. - Swami Sivananda",
  "I am not afraid of tomorrow, for I have seen yesterday and I love today! - William Allen White",
  "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style. - Maya Angelou",
  "Somewhere, something incredible is waiting to be known. - Sharon Begley",
];

function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

module.exports = randomQuote;
