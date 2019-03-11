function myFunction() {
    document.getElementById("head").innerHTML = "The Wheel of Time";
}

// Copypasta van slides
var img = document.getElementsByTagName('img'),
img_len = img.length,
i,
alt;
for (i=0; i < img_len; i++) {
alt = img[i].getAttribute('alt');
if (alt) {
console.log(alt);
}
} 


// Body geel maken testing kak pls send halp and nudes
document.getElementById("body").onchange = function() {changeBackgroundColor()};

function changeBackgroundColor() {
for (let element of body.children) {
    element.style.background = 'yellow';
}