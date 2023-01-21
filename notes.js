function generateItems(data1) {
	let dd = '';
	data1.forEach((item) => {
		item.title
			? (dd += `<a href="${item.file}" target="_blank" style="text-decoration:none">
		<div  class="card1" style="width: 18rem; height:150px">
        <div class="card-body">
          <h5 class="card-title text-dark">${item.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${item.user}</h6>
          <p class="card-text text-dark">${item.description}</p>
        </div>
      </div>
		</a>`)
			: null;
	});
	document.getElementById('notesdata').innerHTML = dd;
}

var items = [];

function getItems() {
	db.collection('notes').onSnapshot((snapshot) => {
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
	let v = document.querySelector('#search').value;
	let item = items.filter((data) =>
		data.title.toLowerCase().includes(v.toLowerCase()),
	);
	console.log(item);
	generateItems(item);
	if (v.length >= 0 && v < 1) {
		generateItems(items);
	}
}

getItems();

function addItem() {
	let name = document.querySelector('#name').value;
	let file = document.querySelector('#file').value;
	let dept = document.querySelector('#dept').value;
	let sem = document.querySelector('#sem').value;
	let email = document.querySelector('#email').value;
	let title = document.querySelector('#title').value;
	let description = document.querySelector('#description').value;
	let data = {
		name,
		file,
		dept,
		sem,
		title,
		email,
		date: '',
		description,
	};
	console.log(data);

	db.collection('notes').add(data);
	// window.location.reload();
}
