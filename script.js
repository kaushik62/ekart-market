let shopping_cart_container = document.querySelector(
  ".shopping_cart_container"
);
let cross_icon = document.querySelector(".cross_icon");
let cart_icon = document.querySelector(".cart_icon");
let nav_front_page_container = document.querySelector(
  ".nav_front_page_container"
);
let remove_item = document.querySelector(".remove_item");
let list_item = document.querySelector(".list_item");
let fontpage_overlay = document.querySelector(".fontpage_overlay");

let user_login = document.querySelector(".user_login");

let signup_pop = document.querySelector("#signup_pop");
let login_pop = document.querySelector("#login_pop");

let sign_in_up_close_btn = document.querySelector(".sign_in_up_close_btn");

cross_icon.addEventListener("click", () => {
  shopping_cart_container.style.display = "none";
  fontpage_overlay.style.display = "none";
  document.getElementById("main_container").style.display = "block";
});

cart_icon.addEventListener("click", () => {
  shopping_cart_container.style.display = "block";
  document.getElementById("main_container").style.display = "none";
  fontpage_overlay.style.display = "block";
});

let cartIcon = document.getElementById("cartIcon");
cartIcon.addEventListener("click", () => {
  shopping_cart_container.style.display = "block";
  document.getElementById("main_container").style.display = "none";
  fontpage_overlay.style.display = "block";
});

user_login.addEventListener("click", () => {
  signup_pop.style.display = "block";
  document.getElementById("main_container").style.display = "none";
  fontpage_overlay.style.display = "block";
});

sign_in_up_close_btn.addEventListener("click", () => {
  signup_pop.style.display = "none";
  login_pop.style.display = "none";
  fontpage_overlay.style.display = "none";
  document.getElementById("main_container").style.display = "block";
});

let open_login_pop = document.getElementById("open_login_pop");

open_login_pop.addEventListener("click", () => {
  signup_pop.style.display = "none";
  login_pop.style.display = "block";
});
let login_close = document.getElementById("login_close");
login_close.addEventListener("click", () => {
  login_pop.style.display = "none";
  fontpage_overlay.style.display = "none";
  document.getElementById("main_container").style.display = "block";
});

let open_signup_pop = document.getElementById("open_signup_pop");
open_signup_pop.addEventListener("click", () => {
  login_pop.style.display = "none";
  signup_pop.style.display = "block";
});

// remove text from form
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let signup_btn = document.getElementById("signup");

signup_btn.addEventListener("click", (e) => {
  e.preventDefault();
  setTimeout(() => {
    username.value = "";
    email.value = "";
    password.value = "";
  }, 2000);
});
