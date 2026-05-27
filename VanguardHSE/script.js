var navLinks = document.getElementById("navLinks");
var menuBtn = document.getElementById("menuBtn");

function showMenu() {
    navLinks.style.right = "0";
    menuBtn.style.display = "none";
    menuBtn.style.visibility = "hidden";
}

function hideMenu() {
    navLinks.style.right = "-200px";
    menuBtn.style.display = "block";
    menuBtn.style.visibility = "visible";
}