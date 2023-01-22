function genItems(data) {
  let da = "";
  data.map((d) => {
    const id = d.video ? d.video.slice(17) : 0;
    d.title
      ? (da += ` <div class="card1" style="width: 18rem; height:250px" data-aos="fade-in">
          ${d.embed ? d.embed : ""}
          ${
            d.video
              ? `<iframe src="https://www.youtube.com/embed/${id.toString()}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
              : ""
          }
          <div class="card-body align-items-center">
            <p class="card-text">${d.title}
            </p>
          </div>
        </div>`)
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
