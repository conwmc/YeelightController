const firebaseConfig = {
  apiKey: "AIzaSyBK0B5-BLjuFmNb7-HSi18zW2Wxr1Tl7KU",
  authDomain: "soundmcbit.firebaseapp.com",
  databaseURL: "https://soundmcbit-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "soundmcbit",
  storageBucket: "soundmcbit.appspot.com",
  messagingSenderId: "847266337275",
  appId: "1:847266337275:web:749e3fd6f633217990bb5e"
};
firebase.initializeApp(firebaseConfig);

var sumdata =  []
var allint = []
var e = []
// var soundData = [];
var myDB = firebase.database().ref('Sound');
// var recordDisplay = soundData.push(myDB);
// document.getElementById("soundList").innerHTML+= recordDisplay+"<br>";


// data.val()
myDB.on('child_added', displayRecords);



function displayRecords(data) {

  var record = data.val();
  var recordDisplay = record.Sound;
  let e = parseInt(recordDisplay);
  let allint = sumdata += e;
  document.getElementById("soundData").innerHTML+= recordDisplay+",  ";


};
document.getElementById("soundAverage").innerHTML+= e+',';
