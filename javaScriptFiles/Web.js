//Variables

var header = document.getElementById("fixedNav");
var sticky = header.offsetTop;
var dropDown = document.getElementById("myDropdown");
const switchTheme = document.querySelector("#switch");
var UserStatus = window.localStorage.getItem("isLoggedIn");

var chessLink = document.getElementById("chessLink");
var tictactoeLink = document.getElementById("tictactoeLink");
var calcLink = document.getElementById("calcLink");

//Code for the fixed-navigationBar

window.onscroll = function() {fixedHeader()};

function fixedHeader() {
	if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        header.style.width = "93.2%";
        header.style.marginTop = "0px";
        header.style.boxShadow = "1px 3px 5px 0px rgb(32, 32, 32)";
        header.style.backgroundColor = "#244672ef";
    } else {
        header.classList.remove("sticky");
        header.style.width = "95.4%";
        header.style.marginTop = "5px";
        header.style.boxShadow = "none";
        header.style.backgroundColor = "#244672";
    }
}

//Code for the dropDown button

function myFunction() {
    dropDown.classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Code for searchBar

function search_news() {
    var input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    let wholeNews = document.getElementsByClassName("wholeNews");

    for (i = 0; i < wholeNews.length; i++) {
        if (!wholeNews[i].innerHTML.toLowerCase().includes(input)) {
            wholeNews[i].style.display = "none";
        } else {
            wholeNews[i].style.display = "block";
        }
    }
}

// Code for Dark mode button

switchTheme.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Code to determine the User Staus

window.onload = function() {userStatus()}

function userStatus(){
    if (UserStatus != "true") {
        document.getElementById("userButton").style.display = "none";
		chessLink.style.display = "none";
		calcLink.style.display = "none";
		tictactoeLink.style.display = "none";
    }
    else if (UserStatus = "true") {
        document.getElementById("userButton").style.display = "block";
		chessLink.style.display = "block";
		calcLink.style.display = "block";
		tictactoeLink.style.display = "block";
    }
}