const logout = async () => {
  // TODO: Add a comment describing the functionality of this expression
  // Initiate an API post call to the api/users/logout route
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // TODO: Add a comment describing the functionality of this statement
    // If logout successful redirect user to the login page
    document.location.replace("/login");
  } else {
    alert("Failed to log out");
  }
};

document.querySelector("#logout").addEventListener("click", logout);
