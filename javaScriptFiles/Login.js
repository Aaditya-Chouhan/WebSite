// Global Variables

var Register = document.getElementById("reg");
var logIn = document.getElementById("log");
var regButton = document.getElementById("navButton1");
var logButton = document.getElementById("navButton2");

var profileUserId = document.getElementById("profileUserId");
var profilePassword = document.getElementById("profilePassword");
var profileEmail = document.getElementById("profileEmail");
var passwordLenght = JSON.parse(window.localStorage.getItem("password")).length;
var isLoggedIn = window.localStorage.getItem("isLoggedIn");
var pass = "*";

// Code to validate the Registration-form

function register() {
    var pasword = document.getElementById("password");
    var paswdRepeat = document.getElementById("paswdRepeat");

    if (pasword.value != paswdRepeat.value) {
        alert("Passwords typed in the form do not match. Try retyping it.");
    }
    else {
        logIn.style.display = "block";
        Register.style.display = "none";
        window.localStorage.setItem("userID", JSON.stringify(document.getElementById("userid").value));
        window.localStorage.setItem("email", JSON.stringify(document.getElementById("email").value));
        window.localStorage.setItem("password", JSON.stringify(document.getElementById("password").value));
    }
}

// Code to validate the Login-form

function login() {
    var login_userID = document.getElementById("login_userID").value;
    var login_paswd = document.getElementById("login_paswd").value;
    var registered_userID = JSON.parse(window.localStorage.getItem("userID"));
    var registered_paswd = JSON.parse(window.localStorage.getItem("password"));

    if (login_userID != registered_userID && login_paswd != registered_paswd) {
        alert("Both, the User ID and the Password entered are wrong !");
        location.reload();
    }
    else if (login_userID != registered_userID) {
        alert("The User ID entered is incorrect ! Try retyping.");
        location.reload();
    }
    else if (login_paswd != registered_paswd) {
        alert("The Password entered is incorrect ! Try retyping.");
        location.reload();
    }
    else {
        window.localStorage.setItem("isLoggedIn", "true");
        alert("You have logged in Successfuly !");
        window.location.href = "index.html";
    }
}

// Code for transitions

function reg() {
    logIn.style.display = "none";
    Register.style.display = "block";
    regButton.style.background = "linear-gradient(90deg, darkgreen, #04AA6D)";
    logButton.style.background = "#04AA6D";
    document.title = "Register";
}

function log() {
    Register.style.display = "none";
    logIn.style.display = "block";
    logButton.style.background = "linear-gradient(90deg, #04AA6D, darkgreen)";
    regButton.style.background = "#04AA6D";
    document.title = "Login";
}

// Code for User Profile

function logOut() {
    window.localStorage.setItem("isLoggedIn", false);
    window.location.href = "index.html";
}

function profileLoad() {
    if (isLoggedIn = true) {
        profileUserId.innerHTML = JSON.parse(window.localStorage.getItem("userID"));
        profilePassword.innerHTML = pass.repeat(passwordLenght);
        profileEmail.innerHTML = JSON.parse(window.localStorage.getItem("email"));
    }
    else {
        alert("You are Logged out");
        window.location.href = "index.html";
    }
}

function deleteAcc() {
    window.localStorage.setItem("userID", "none");
    window.localStorage.setItem("email", "none");
    window.localStorage.setItem("password", "none");
	window.localStorage.setItem("isLoggedIn", "false");
    window.location.href = "index.html";
}