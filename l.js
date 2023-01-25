function ll() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      // Handle successful login
      const user = result.user;
      console.log(`Logged in as ${user.displayName} (${user.email})`);
    })
    .catch((error) => {
      // Handle error
      console.error(`Error logging in: ${error.message}`);
    });
}
