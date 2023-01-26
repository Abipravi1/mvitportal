console.clear();
localStorage.getItem("user") ? null : (window.location.href = "/login.html");

document.getElementById("email").value = JSON.parse(
  localStorage.getItem("user")
).email;

document.getElementById("name").value = JSON.parse(
  localStorage.getItem("user")
).name;

async function add() {
  let file = document.querySelector("#file").value;
  let dept = document.querySelector("#dept").value;
  let sem = document.querySelector("#sem").value;
  let title = document.querySelector("#title").value;
  let data = {
    user: JSON.parse(localStorage.getItem("user")).name,
    video: file,
    dept,
    sem,
    title,
    email: JSON.parse(localStorage.getItem("user")).email,
    date: "",
    active: "true",
  };

  await db.collection("lectures").add(data);
  alert("Lecture added successfully");
  window.location.href = "/lectures/lectures.html";
}
