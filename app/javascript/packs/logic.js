var maximize = document.getElementById("maximize");
var minimize = document.getElementById("minimize");
var google = document.getElementById("google");
var about = document.getElementById("about");
var panel = document.getElementById("panel");
var logo = document.querySelector("logo");
var title = document.querySelector("title");

function submitForm() {
    shell.openExternal('https://www.google.com/search?q='+document.getElementById('search').value);
}

function help() {
    shell.openExternal('https://github.com/MatthewZenn/Matter');
}

function Move() {
    if (panel.style.left == '-20%') {
        panel.style.left = '0';
    }

    else {
        panel.style.left = '-20%';
    }
}

logo.addEventListener("click", Move);
title.addEventListener("click", Move);