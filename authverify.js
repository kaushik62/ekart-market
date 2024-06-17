import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyCtyTu8Iskz3kYqzD-fvONxy6t-4kf5BwI",
//   authDomain: "ekart-market.firebaseapp.com",
//   projectId: "ekart-market",
//   storageBucket: "ekart-market.appspot.com",
//   messagingSenderId: "45490767873",
//   appId: "1:45490767873:web:40f702e69556c349aad800",
// };

const firebaseConfig = {
  apiKey: "AIzaSyA5qQuBpPuuS5Kog2me2-Nzu2q5yCKbNzc",
  authDomain: "sports-management-1098a.firebaseapp.com",
  projectId: "sports-management-1098a",
  storageBucket: "sports-management-1098a.appspot.com",
  messagingSenderId: "225325722699",
  appId: "1:225325722699:web:12bd2c1807fb063f6571ce"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

// sing in with google
let google_signin_btn = document.querySelectorAll(".google_signin_btn");

google_signin_btn.forEach(function (button) {
  button.addEventListener("click", function () {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        window.location.reload();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  });
});

//  signup with email

let para_danger = document.querySelector(".para_danger");
let para_success = document.querySelector(".para_success");
let login_pop = document.getElementById("login_pop");
let signup_pop = document.getElementById("signup_pop");

let signup = document.getElementById("signup");

signup.addEventListener("click", (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      para_success.style.display = "block";
      signup_pop.style.display = 'none';
      login_pop.style.display = "block";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      para_danger.style.display = "block";
    });

  setTimeout(() => {
    para_success.style.display = "none";
    para_danger.style.display = "none";
  }, 2000);
});

// login with email
let login_btn = document.getElementById("login");
let logged_successfully = document.getElementById("logged_successfully");
let incorrect_user = document.getElementById("incorrect_user");
let logged_in = document.querySelector(".logged_in");

login_btn.addEventListener("click", () => {
  let email_1 = document.getElementById("email_1").value;
  let password_1 = document.getElementById("password_1").value;
  signInWithEmailAndPassword(auth, email_1, password_1)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      incorrect_user.style.display = "none";
      logged_successfully.style.display = "block";
      window.location.hash = "reload"; 
      setTimeout(() => {
        window.location.reload();
      }, 500);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      incorrect_user.style.display = "block";
    });
});
