// TODO: firebase authorization ---------
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDya-YLkvmgFjQFXdF8lQwK8Oc1-iZNnBo",
  authDomain: "my-study-manager.firebaseapp.com",
  projectId: "my-study-manager",
  storageBucket: "my-study-manager.firebasestorage.app",
  messagingSenderId: "43832292919",
  appId: "1:43832292919:web:110c0bf47014e61a3171b2",
  measurementId: "G-PCRYQTE7HY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// TODO: signin authentication funtions called
submit.addEventListener("click", function (event) {
    event.preventDefault()
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            localStorage.setItem('userID', JSON.stringify(user.uid));
            window.location.href = "calendar.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage + "\n" + errorCode)
        });
})
// TODO: firebase cloud storage functions

// TODO: Set up Firebase cloud functions, where we can access API's from
  // this is apparently easier and more secure to go this route

