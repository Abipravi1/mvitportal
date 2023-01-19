const firebaseConfig = {
	apiKey: 'AIzaSyAAZYl9LkM-JsLcASx3hlYAsriD_ydomqg',
	authDomain: 'mvit-6e674.firebaseapp.com',
	projectId: 'mvit-6e674',
	storageBucket: 'mvit-6e674.appspot.com',
	messagingSenderId: '571311030129',
	appId: '1:571311030129:web:fdd72baf6af3b99a3d80d0',
	measurementId: 'G-SV8Q67H21Z',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();
