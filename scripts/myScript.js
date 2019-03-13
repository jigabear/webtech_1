//Populating the first select menu
function initialize() {
    var sel = document.getElementById('elementSelect');

    var body = document.getElementsByTagName("body");
    var bodyElement = createOption(body[0].localName);
    sel.appendChild(bodyElement);

    //Traversing all elements under body
    for (var index = 0; index < body[0].children.length; index++) {
        var childElement = body[0].children[index];
        var optionElement = createOption(childElement.localName);
        sel.appendChild(optionElement);
    }
}

//Create option in the menu
function createOption(name) {
    var optionElement = document.createElement("OPTION");
    optionElement.value = name;
    optionElement.innerText = name;
    return optionElement;
}

var appearanceTypes = {
    fontSizeSmaller: "smaller",
    fontSizeLarger: "larger",
    color: "color"
};

//Chooses color of font size based on selection in the second menu
function changeAppearance(element) {
    if (element) {
        var appearanceType = element.value;
        if (appearanceType === appearanceTypes.color) {
            changeBackgroundColor();
        } else {
            changeFontSize(appearanceType);
        }
    }
}

//Gets value from selected option in the first menu
function getElementsToChange() {
    var elementNameToChange = document.getElementById("elementSelect").value;
    var elementsToChange = document.getElementsByTagName(elementNameToChange);
    return elementsToChange;
}

//Changes color of the element (loop in order to deal with several element (e.g. several sections)
function changeBackgroundColor() {
    var elementsToChange = getElementsToChange();
    for (var index = 0; index < elementsToChange.length; index++) {
        elementsToChange[index].style.backgroundColor = document.getElementById("colorSelect").value;
    }
}

//Changes font size of a element (loop in order to deal with several element (e.g. several sections)
function changeFontSize(appearanceType) {
    var elementsToChange = getElementsToChange();
    for (var index = 0; index < elementsToChange.length; index++) {
        elementsToChange[index].style.fontSize = appearanceType;
    }
}