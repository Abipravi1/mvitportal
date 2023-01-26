async function ll() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(async (result) => {
      const user = result.user;
      let items = [];
      await db
        .collection("notes")
        .where("email", "==", "sss@gmail.com")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() });
          });
        });
      await console.log(items);
      // let uploadData = {
      //   name: user.providerData[0].displayName,
      //   email: user.providerData[0].email,
      //   contact: user.providerData[0]?.phoneNumber,
      //   photo: user.providerData[0].photoURL,
      //   uid: user.providerData[0].uid,
      //   sem: "none",
      //   dept: "none",
      //   eno: user.providerData[0].uid,
      // };
      // await db.collection("users").add(uploadData);
      // window.location.href = "/index.html";
    })
    .catch((error) => {
      // Handle error
      console.error(`Error logging in: ${error.message}`);
    });
}
