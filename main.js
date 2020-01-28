var dot = document.getElementById("flicker");
var colorSubject = document.getElementById("changeColor");


window.setInterval(colorChanger, 2000);

var colors = ["#2E60B4", "#3E91ED", "#5D93CA", "#94C5E0", "#A0C0D5"];




let i = -1;

function colorChanger() {

    if (i < colors.length) {
        colorSubject.style.color = colors[i];
        i++;
    } else {
        i = 0;
    }




}
window.clearInterval(colorChanger);