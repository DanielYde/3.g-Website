var button = document.getElementsByClassName("scroll-plus");
let active = -1;

function change() {
    active *= -1;
    active == 1 ? button[0].innerHTML = "Active" : button[0].innerHTML = "Not Active"
}