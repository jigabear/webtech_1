// Het vullen van de select menu
function initialize() {
    var sel = document.getElementById('elementSelect');

    var body = document.getElementsByTagName("body");
    var bodyElement = createOption(body[0].localName);
    sel.appendChild(bodyElement);

    // Traversing alle elementen onder body
    for (var index = 0; index < body[0].children.length; index++) {
        var childElement = body[0].children[index];
        var optionElement = createOption(childElement.localName);
        sel.appendChild(optionElement);
    }
}

// Om een  option element aan te maken in het menu
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

// Kiest color of font size aan de hand geselecteerde optie in menu 2
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

// Pakt value van geselecteerde optie in menu 1
function getElementsToChange() {
    var elementNameToChange = document.getElementById('elementSelect').value;
    var elementsToChange = document.getElementsByTagName(elementNameToChange);
    return elementsToChange;
}

// maakt element blauw (loop om alles te pakken zoals bv. meerdere sections)
function changeBackgroundColor() {
    var elementsToChange = getElementsToChange();
    for (var index = 0; index < elementsToChange.length; index++) {
        elementsToChange[index].style.backgroundColor = document.getElementById('colorPicker').value;
    }
}

// verandert font size binnen een element (loop stuff again)
function changeFontSize(appearanceType) {
    var elementsToChange = getElementsToChange();
    for (var index = 0; index < elementsToChange.length; index++) {
        elementsToChange[index].style.fontSize = appearanceType;
    }
}