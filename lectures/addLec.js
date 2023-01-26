console.clear();
localStorage.getItem("user") ? null : (window.location.href = "/login.html");

document.getElementById("email").value = JSON.parse(
  localStorage.getItem("user")
).email;
