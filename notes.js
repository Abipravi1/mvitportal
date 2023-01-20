function generateItems(data1) {
	data1.forEach((item) => {
		document.getElementById(
			'notesdata',
		).innerHTML += `<a href="${item.file}" target="_blank" style="text-decoration:none">
		<div class="card" style="width: 18rem; height:150px">
        <div class="card-body">
          <h5 class="card-title text-dark">${item.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${item.user}</h6>
          <p class="card-text">${item.description}</p>
        </div>
      </div>
		</a>`;
	});
}

function getItems() {
	db.collection('notes').onSnapshot((snapshot) => {
		let items = [];
		snapshot.docs.forEach((doc) => {
			items.push({
				id: doc.id,
				...doc.data(),
			});
		});
		generateItems(items);
	});
}

getItems();
