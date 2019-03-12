function myFunction() {
    document.getElementById("head").innerHTML = "The Wheel of Time";
}


var sel = document.getElementById('element-select');

function getSelectedOption(sel) {
    var opt;
    for ( var i = 0, len = sel.options.length; i < len; i++ ) {
        opt = sel.options[i];
        if ( opt.selected === true ) {
            break;
        }
    }
    Traversing();
}

function Traversing() {
    var opt = document.getElementsByTagName(opt),
    opt_len = opt.length,
    i,
    alt;
    for (i=0; i < imxg_len; i++) {
    alt = opt[i].getAttribute('alt');
    if (alt) {
    console.log(alt);
    }
    } 
    }

// element blauw maken
function changeBackgroundColorBlue() {
    document.getElementById(alt).style.color = "blue";
}

// element geel maken
function changeBackgroundColorYellow() {
    document.getElementById(alt).style.color = "yellow";
}

// element font size vergroten
function changeFontSizeLarger() {
    document.getElementById(alt).style.fontSize = "larger";
}

// element font size verkleinen
function changeFontSizeSmaller() {
    document.getElementById(alt).style.fontSize = "smaller";
}