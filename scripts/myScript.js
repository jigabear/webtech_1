function myFunction() {
    document.getElementById("head").innerHTML = "The Wheel of Time";
}



// Body geel maken testing kak pls send halp and nudes
document.getElementById("body").onchange = function() {changeBackgroundColor()};

function changeBackgroundColor() {
for (let element of body.children) {
    element.style.background = 'yellow';
}