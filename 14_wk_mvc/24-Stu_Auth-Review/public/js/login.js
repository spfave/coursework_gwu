const loginFormHandler = async (event) => {
  // TODO: Add a comment describing the functionality of this statement
  // Stop form submit default behavior
  event.preventDefault();

  // TODO: Add a comment describing the functionality of these expressions
  // Retrieve data from form inputs and trim leading/trailing white space
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // TODO: Add a comment describing the functionality of this expression
    // Initiate an API post call to the api/users/login route with the user email
    // and password passed to the server
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
