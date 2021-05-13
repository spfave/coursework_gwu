const sugar = require("sugar");

module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  // TODO: Create a custom helper 'format_date' that takes in a timestamp,
  // adds five years to the date, and formats it as M/D/YYYY
  format_date: (date) => {
    // use JS Date object methods
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear() + 5}`;

    // Using sugar.js package
    // const date5year = sugar.Date(date);
    // return date5year.advance({ years: 5 }).format("{M}/{d}/{yyyy}");
  },
};
