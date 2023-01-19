function getItems() {
	db.collection('notes').onSnapshot((snapshot) => {
		let items = [];
		console.log(snapshot);
		snapshot.docs.forEach((doc) => {
			items.push({
				id: doc.id,
				...doc.data(),
			});
		});
		console.log(items);
	});
}

getItems();
