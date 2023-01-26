localStorage.getItem("user") ? null : (window.location.href = "/login.html");

function generateItems(data1) {
  let dd = "";
  const cardColors = [
    {
      bg: "#dc3545",
      color: "aliceblue",
    },
    {
      bg: "darkblue",
      color: "aliceblue",
    },
    {
      bg: "darkslategrey",
      color: "aliceblue",
    },
    { bg: "yellowgreen", color: "darkslategrey" },
  ];
  data1.forEach((item, id) => {
    item.title
      ? (dd += `<a href="${
          item.file
        }"target="_blank" style="text-decoration:none">
		<div  class="card1"  style="background-color:${
      id % 4 == 0
        ? cardColors[1].bg
        : id % 2 == 0
        ? cardColors[3].bg
        : id % 3 == 0
        ? cardColors[2].bg
        : id % 3 == 1
        ? "#0d6efd"
        : "#ffc107"
    }; color:${
          id % 4 == 0
            ? cardColors[1].color
            : id % 2 == 0
            ? cardColors[3].color
            : id % 3 == 0
            ? cardColors[2].color
            : "black"
        }; width: 18rem; height:180px">
        <div class="card-body">
          <div class="d-flex gap-4">
		 <h5 class="card-title">${
       item.title
     } </h5><span class="badge bg-primary text-white" style="height:100%">${
          item.dept
        }:${item.sem}</span> 
        </div>
        <hr style="border:1px solid white; width:100%l height:0px"/>
          <h6 class="card-subtitle mb-2">${item.user}</h6>
          <p class="card-text">${item.description}</p>
        </div>
      </div>
		</a>`)
      : null;
  });
  document.getElementById("notesdata").innerHTML = dd;
}

var items = [];

function getItems() {
  db.collection("notes").onSnapshot((snapshot) => {
    snapshot.docs.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    generateItems(items);
  });
}

function search() {
  let v = document.querySelector("#search").value;
  let item = items.filter((data) =>
    data.title.toLowerCase().includes(v.toLowerCase())
  );
  console.log(item);
  generateItems(item);
  if (v.length >= 0 && v < 1) {
    generateItems(items);
  }
}

getItems();

async function addItem() {
  let name = document.querySelector("#name").value;
  let file = document.querySelector("#file").value;
  let dept = document.querySelector("#dept").value;
  let sem = document.querySelector("#sem").value;
  let email = document.querySelector("#email").value;
  let title = document.querySelector("#title").value;
  let description = document.querySelector("#description").value;
  let data = {
    user: name,
    file,
    dept,
    sem,
    title,
    email,
    date: "",
    description,
  };

  await db.collection("notes").add(data);
  alert("Notes added successfully");
  window.location.href = "/notes.html";
}

function filterdept(x) {
  let v = document.querySelector("#notes-filter-dept").value;
  let item = items.filter((data) =>
    data.dept.toLowerCase().includes(v.toLowerCase())
  );
  generateItems(item);
  if (v.length >= 0 && v < 1) {
    generateItems(items);
  }
}

function filtersem() {
  let v = document.querySelector("#notes-filter-dept").value;
  let item = items.filter((data) =>
    data.dept.toLowerCase().includes(v.toLowerCase())
  );
  let m = document.querySelector("#notes-filter-sem").value;
  let item1 = item.filter((data) =>
    data.sem.toLowerCase().includes(m.toLowerCase())
  );
  generateItems(item1);
  if (v.length >= 0 && v < 1) {
    generateItems(items1);
  }
}
