
  // Import the functions you need from the SDKs you need
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
  import { getDatabase, ref, set, onValue, get, child, push, update } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyBvLM17q2PM0TjpzZuYGgVhJCXAHybP2KA",
    authDomain: "batch-f58ca.firebaseapp.com",
    databaseURL: "https://batch-f58ca-default-rtdb.firebaseio.com",
    projectId: "batch-f58ca",
    storageBucket: "batch-f58ca.appspot.com",
    messagingSenderId: "902033931233",
    appId: "1:902033931233:web:2e3e006e5792ee666f30a0",
    measurementId: "G-MV8FLT94KY"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase(app)

  const starCountRef = ref(db, 'Condition');
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    document.getElementById("Condition").innerHTML = "Threshold: "+data
  });
  const starCountRef2 = ref(db, 'Humidity');
  onValue(starCountRef2, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    document.getElementById("Humidity").innerHTML = "Humidity: "+ data
  });
  const starCountRef3 = ref(db, 'Status:');
  onValue(starCountRef3, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    document.getElementById("Status:").innerHTML = "Status: "+data
  });
  const starCountRef4 = ref(db, 'Switch');
  onValue(starCountRef4, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    if(data == 1){
      $("#b").html("OFF")
      $("#b").click(()=>{
        let upsw = {
          Switch:0
        }
        update(ref(db),upsw)
      })
    }else if(data == 0){
      $("#b").html("ON")
      $("#b").click(()=>{
        let upsw = {
          Switch:1
        }
        update(ref(db),upsw)
      })
    }
    document.getElementById("Switch").innerHTML = data
  });
  const starCountRef5 = ref(db, 'Temperature *C');
  onValue(starCountRef5, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    document.getElementById("Temperature *C").innerHTML = "Temperature in *c: "+data
  });
