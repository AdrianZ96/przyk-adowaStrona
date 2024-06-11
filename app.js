document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const userName = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (userName === "admin" && password === "password") {
    alert("Zostaniesz zalogowany");
  } else {
    alert("Złe dane");
  }
});
