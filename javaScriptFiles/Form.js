/* Redirection of through the return button */

function redirect(){
    window.location.href = "index.html";
}

/* Code to Load the page */

var loadTime = 0;

function loadFunction() {
	loadTime = setTimeout(showPage, 3000);
}

function showPage() {
	document.getElementById("loader").style.display = "none";
	document.getElementById("theBody").style.display = "block";
}

/* Code to get the user-input and respond to it */

function formResponse() {
	window.sessionStorage.setItem("firstName", document.getElementById("firstName").value);
	window.sessionStorage.setItem("lastName", document.getElementById("lastName").value);
}

document.getElementById("thank").innerHTML = "Thank you " + window.sessionStorage.getItem("firstName") + " " + window.sessionStorage.getItem("lastName") + " for your response. It has been recorded.";