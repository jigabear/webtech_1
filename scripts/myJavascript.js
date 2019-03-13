//Info.html page
//Allow the title and short information about the book to be displayed on the info page.
function book() {
    document.getElementById("bookDetails").addEventListener("load", eyeOfTheWorld.showInfo(), false);
    document.getElementById("bookDetails").addEventListener("load", wheelOfTime.showBookTitle(), true);
}
//Wait for all of the DOM to be loaded before executing functions.
document.addEventListener("DOMContentLoaded", function() {
    book();
    productDetails();
    amazonWindowChange();
    authorWindowChange();
    author();
})

//ES6 Class with the book and its properties.
class Book {
    constructor(name, author) {
        this.name = name;
        this.author = author;

        //Create a paragraph containing information about the book.
        this.showInfo = function() {
            var para = document.createElement("P");
            var t = document.createTextNode(this.name + " was written by " + this.author + ". The Eye of The World is the first book in the The Wheel of Time series. It debuted in 1990, and it has been first on the list of New York Times bestselling authors.");
            para.appendChild(t);
            document.getElementById("bookDetails").appendChild(para);
        };

        //Create a heading showing the title of the series.
        this.showBookTitle = function() {
            var titleHeader = document.createElement("h1");
            var titleText = document.createTextNode(this.name);
            titleHeader.appendChild(titleText);
            document.getElementById("branding").appendChild(titleHeader);
        };

    }
}

//Generate the product details section of the info page.
function productDetails() {
    document.getElementById("ProductDetails").addEventListener("load", theEyeOfTheWorld.createProductList(), false);
}

//ES6 Class with the product details of the first book in the series.
class ProductDetails extends Book {
    constructor(name, author, genre, pages, isbn, publisher) {
        super(name, author);
        this.genre = genre;
        this.pages = pages;
        this.isbn = isbn;
        this.publisher = publisher;


        //Function to create a list with product details.
        this.createProductList = function() {
            //Create an unordered list.
            var x = document.createElement("UL");
            //Give the unordered list an ID.
            x.setAttribute("id", "myUL");
            //Append unordered list to a section.
            document.getElementById("productDetails").appendChild(x);
            //Append to a listContainer div, to make the list take on the same conditions as the container div.
            // document.getElementById("listContainer").appendChild(x);

            //Create list item for the book title.
            var listName = document.createElement("LI");
            var textName = document.createTextNode("Title: " + this.name);
            listName.appendChild(textName);
            document.getElementById("myUL").appendChild(listName);

            //Create list item for the book author.
            var listAuthor = document.createElement("LI");
            var textAuthor = document.createTextNode("Author: " + this.author);
            listAuthor.appendChild(textAuthor);
            document.getElementById("myUL").appendChild(listAuthor);

            //Create list item for the book genre.
            var listGenre = document.createElement("LI");
            var textGenre = document.createTextNode("Genre: " + this.genre);
            listGenre.appendChild(textGenre)
            document.getElementById("myUL").appendChild(listGenre);

            //Create list item for the amount of pages of the book.
            var listPages = document.createElement("LI");
            var textPages = document.createTextNode("Pages: " + this.pages);
            listPages.appendChild(textPages)
            document.getElementById("myUL").appendChild(listPages);

            //Create list item for the ISBN of the book.
            var listISBN = document.createElement("LI");
            var textISBN = document.createTextNode("ISBN-13: " + this.isbn);
            listISBN.appendChild(textISBN)
            document.getElementById("myUL").appendChild(listISBN);

            //Create list item for the publisher of the book.
            var listPublisher = document.createElement("LI");
            var textPublisher = document.createTextNode("Publisher: " + this.publisher);
            listPublisher.appendChild(textPublisher)
            document.getElementById("myUL").appendChild(listPublisher);
        };
    }
}

//Function to generate the author bio section on the info page.
function author() {
    document.getElementById("authordiv").addEventListener("load", authorBook.createAuthorDetails(), false);
}


//ES6 Class with the author details.
class AuthorDetails extends Book {
    constructor(name, author, series, birthdate) {
        super(name, author);
        this.series = series;
        this.birthdate = birthdate;

        this.createAuthorDetails = function() {
            var p = document.createElement("P")
            var authorText = document.createTextNode(this.author + " is the author of the popular series by the name of " + this.series + ", of which the first book he wrote is " + this.name + ". " + this.author + " was born on " + this.birthdate + ". ");
            var authorText2 = document.createTextNode("He was born in Charleston, South Carolina. He learnt how to read when he was four, aided by his brother who was twelve years older. Robert has served in the U.S. Army, and he began writing in 1977. 13 years after he started writing, he released the first book in his bestseller The Wheel of Time.");
            p.appendChild(authorText);
            p.appendChild(authorText2);
            document.getElementById("authordiv").appendChild(p);
        };
    }
}

//Function to generate the link to redirect the user to the Amazon page for the first book.
function amazonWindowChange() {
    document.getElementById("openAmazon").addEventListener("click", amazonInNewTab);
}

//Function to generate the link to redirect the user to the Author page upon pressing on the Author bio title.
function authorWindowChange() {
    document.getElementById("authorBio").addEventListener("click", authorInNewTab);
}

//Function to link to Amazon webpage.
function amazonInNewTab() {
    var amazonUrl = "https://www.amazon.com/Eye-World-Wheel-Time-Book/dp/0812511816";
    var win = window.open(amazonUrl, "_blank");
    win.focus();
}

//Function to link to author page.
function authorInNewTab() {
    var authorUrl = "author.html";
    var win = window.open(authorUrl, "_parent");
    win.focus();
}

//Instantiating the ES6 classes to use them.
wheelOfTime = new Book("The Wheel of Time", "Robert Jordan");
eyeOfTheWorld = new Book("The Eye of The World", "Robert Jordan");
theEyeOfTheWorld = new ProductDetails("The Eye of The World", "Robert Jordan", "Fantasy Novel", "832 (Paperback)", "978-0812511819", "Tor Fantasy, November 15, 1990");
authorBook = new AuthorDetails("The Eye of The World", "Robert Jordan", "The Wheel of Time", "October 17, 1948");


//Menu's for changing appearance
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