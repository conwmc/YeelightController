const firebaseConfig = {
  apiKey: "AIzaSyA39NlaeFyq6fqILfkchBGYmjmMciDjJhg",
  authDomain: "yeelight-9c8ad.firebaseapp.com",
  databaseURL: "https://yeelight-9c8ad-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "yeelight-9c8ad",
  storageBucket: "yeelight-9c8ad.appspot.com",
  messagingSenderId: "752726940415",
  appId: "1:752726940415:web:da97c9d31b0ab871fb0aca",
  measurementId: "G-ED5SEFK2PY"
};

firebase.initializeApp(firebaseConfig);


var myDB = firebase.database().ref('Light');

// myDB.on("child_added", displayRecords);



function lightOn() {
  var stateVar = 'on';
  var time = Date().toLocaleString();
   // Creates a node
  var myDB = firebase.database().ref('switch on');
  // Creates a patient node
  var addRecord = myDB.child('light state').push();
  record = {
    'Light state' : stateVar,
    'time' : time
  }

  addRecord.set(record);
  
  alert('light on');
 
}


function lightOff() {
  var stateVar = 'off';
  var time = Date().toLocaleString();
   // Creates a node
  var myDB = firebase.database().ref('switch off');
  // Creates a patient node
  var addRecord = myDB.child('light state').push();
  record = {
    'Light state' : stateVar,
    'time' : time
  }

  addRecord.set(record);
  
  alert('light off');
 
}
