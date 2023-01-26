localStorage.getItem("user") ? null : (window.location.href = "/login.html");

function genItems(data) {
  let da = "";
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
  data.map((d, id1) => {
    const id = d.video ? d.video.slice(17) : 0;
    d.title
      ? (da +=
          d.active == "true"
            ? ` <div class="card1 align-items-center" style="background-color:${
                id1 % 4 == 0
                  ? cardColors[1].bg
                  : id1 % 2 == 0
                  ? cardColors[3].bg
                  : id1 % 3 == 0
                  ? cardColors[2].bg
                  : id1 % 3 == 1
                  ? "#0d6efd"
                  : "#ffc107"
              }; color:${
                id1 % 4 == 0
                  ? cardColors[1].color
                  : id1 % 2 == 0
                  ? cardColors[3].color
                  : id1 % 3 == 0
                  ? cardColors[2].color
                  : "black"
              }; width: 300px; height:250px">
          ${d.embed ? d.embed : ""}
          ${
            d.video
              ? `<iframe src="https://www.youtube.com/embed/${id.toString()}" title="YouTube video player"  style="place-self:normal" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
              : ""
          }
          <div class="card-body mt-3 align-items-center">
            <p class="card-text">${d.title}
            </p>
          </div>
        </div>`
            : "")
      : null;
  });
  document.getElementById("lecss").innerHTML = da;
}

function getItems() {
  let items = [];
  db.collection("lectures").onSnapshot((snapshot) => {
    snapshot.docs.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    genItems(items);
  });
}

getItems();

localStorage.getItem("user").length > 0
  ? (document.getElementById("lec-add").style.display = "block")
  : none;
