var maximize = document.getElementById("maximize");
var minimize = document.getElementById("minimize");
var google = document.getElementById("google");
var about = document.getElementById("about");

function submitForm() {
    shell.openExternal('https://www.google.com/search?q='+document.getElementById('search').value);
}

function Move() {
    if (document.getElementById('panel').style.left == '-20%') {
        document.getElementById('panel').style.left = '0';
    }

    else {
        document.getElementById('panel').style.left = '-20%';
    }
}

window.Move = Move;