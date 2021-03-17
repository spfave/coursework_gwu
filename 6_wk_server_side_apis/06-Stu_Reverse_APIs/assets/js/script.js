var requestUrl = "https://api.github.com/orgs/Netflix/repos";

// Browser Fetch Method
// TODO: Comment on how Fetch returns an API call
/**
 * Passed a request url directly
 * Return a promise which is handled by the callback function in .then()
 * Returns text JSON which needs to be parsed explicitly
 * Will execute .then whether a successful or bad response
 */
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("Fetch Response \n-------------");
    console.log(data);
  });

// JQuery AJAX
// TODO: Comment on how AJAX returns an API call
/**
 * Passed an object with key-value pairs
 * Returns a promise which is handled by the callback function in .then()
 * Will automatically use JSON to parse the returned JSON text
 * Uses .catch() to define a callback function to be executed on bad response
 */
$.ajax({
  url: requestUrl,
  method: "GET",
}).then(function (response) {
  console.log("AJAX Response \n-------------");
  console.log(response);
});

// Browser XMLHttpRequest
// TODO: Comment on how XMLHttpRequest returns an API call
/**
 *
 */
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log("XMLHttpRequest Response \n-------------");
    console.log(xhr.response);
  }
};
xhr.open("GET", requestUrl);
xhr.send();

// TODO: Comment on the differences on the format of the data that was returned
/**
 * fetch:
 * Uses vanilla JS to perform an asynchronous http GET request
 *
 * JQ.ajax:
 * Uses JQuery library to perform an asynchronous HTTP request
 *
 * XMLHttpRequest:
 * Need to insatiate an XMLHttpRequest object and define callback function
 * to execute when state changes. Then can open request and final send request
 */
