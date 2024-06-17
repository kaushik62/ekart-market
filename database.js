import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

import {
  getDatabase,
  ref,
  set,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCtyTu8Iskz3kYqzD-fvONxy6t-4kf5BwI",
  authDomain: "ekart-market.firebaseapp.com",
  databaseURL: "https://ekart-market-default-rtdb.firebaseio.com",
  projectId: "ekart-market",
  storageBucket: "ekart-market.appspot.com",
  messagingSenderId: "45490767873",
  appId: "1:45490767873:web:40f702e69556c349aad800",
};

const app = initializeApp(firebaseConfig);

let AddressDatabase = getDatabase(app);

let submit_btn = document.getElementById("submit_btn");
let address_added = document.getElementById("address_added");
let mandatory = document.getElementById("mandatory");

submit_btn.addEventListener("click", (e) => {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let mobile = document.getElementById("mobile").value;
  let pincode = document.getElementById("pincode").value;
  let state_list = document.getElementById("state_list");
  let state_name = state_list.options[state_list.selectedIndex].text;

  if (
    username == "" ||
    mobile == "" ||
    pincode == "" ||
    state_list.value == 0
  ) {
    mandatory.style.display = "block";
  } else if (mobile.length < 10 || mobile.length > 10) {
    alert("Mobile no. should in 10 digits only");
  } else if (pincode.length < 6 || pincode.length > 6) {
    alert("Pincode should be in 6 digits");
  } else {
    mandatory.style.display = "none";
    address_added.style.display = "block";
    let address_area = document.querySelector(".address_area");
    address_area.style.display = 'none';
    let payment_area = document.querySelector(".payment_area");
    payment_area.style.display = 'block';
    set(ref(AddressDatabase, "user/" + username), {
      username: username,
      mobile: mobile,
      pincode: pincode,
      state: state_name,
    });

    setTimeout(() => {
      address_area.style.display = "none";
      payment_area.style.display = "block";
    }, 1000);
  }

  setTimeout(() => {
    mobile.value = "";
    pincode.value = "";
    mandatory.style.display = "none";
    address_added.style.display = "none";
  }, 2000);
});
