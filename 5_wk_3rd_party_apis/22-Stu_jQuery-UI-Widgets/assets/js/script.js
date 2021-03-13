const formEl = $("#skills-form");
const nameInputEl = $("#skill-name");
const dateInputEl = $("#datepicker");
const skillsListEl = $("#skills-list");

var printSkills = function (name, date) {
  var listEl = $("<li>");
  var listDetail = name.concat(" on ", date);
  listEl.addClass("list-group-item").text(listDetail);
  listEl.appendTo(skillsListEl);
};

var handleFormSubmit = function (event) {
  event.preventDefault();

  var nameInput = nameInputEl.val();
  var dateInput = dateInputEl.val();

  if (!nameInput || !dateInput) {
    console.log("You need to fill out the form!");
    return;
  }

  printSkills(nameInput, dateInput);

  nameInputEl.val("");
  dateInputEl.val("");
};

formEl.on("submit", handleFormSubmit);

// Add Autocomplete widget here
//
$(function () {
  // Autocomplete list
  const skillNames = [
    "Git",
    "HTML",
    "CSS",
    "JavaScript",
    "JQuery",
    "BootStrap",
    "NodeJS",
    "Express",
    "MySQL",
  ];

  nameInputEl.autocomplete({
    source: skillNames,
  });

  // Date picker
  dateInputEl.datepicker({ changeMonth: true, changeYear: true });
});

// Add Datepicker widget here
//
// Added in line with above document load
