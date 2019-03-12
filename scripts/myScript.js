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

// Element in andere menu gooien? idk fam send halp
function getSelectElement() {
    var x = document.getElementById("element-select");
// document.getElementById("selected-element").innerHTML = x;
  }

// element blauw maken
function changeBackgroundColor() {
    document.getElementById("element-select").style.color = "blue";
}

// element geel maken
function changeBackgroundColor() {
    document.getElementById("element-select").style.color = "yellow";
}

// element font size vergroten
function changeFontSize() {
    document.getElementById("element-select").style.fontSize = "larger";
}

// element font size verkleinen
function changeFontSize() {
    document.getElementById("element-select").style.fontSize = "smaller";
}