const url = new URL("https://api.github.com/repos/nodejs/node/issues");
const params = {
  per_page: 10,
  state: "open",
  sort: "created",
  direction: "desc",
};
url.search = new URLSearchParams(params).toString();

fetch(
  // Explain each parameter in comments below.
  // "https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc"
  url
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.

/**
 * per_page = 10: will return 10 results
 * state = open: will return open issues
 * sort = created: will sort results by created date
 * direction = desc: will returned sorted results in descending order
 *
 * per_page: how my results to return
 * state: a state on which to filter the returned results
 * sort: metric by which to sort returned results
 * direction: sorting order (ascending or descending)
 */
