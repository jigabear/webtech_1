function book(){
    document.getElementById("bookDetails").addEventListener("load", eyeOfTheWorld.showInfo(), false);
    document.getElementById("bookDetails").addEventListener("load", wheelOfTime.showBookTitle(), true);
}
document.addEventListener("DOMContentLoaded", function(){
    book();
})

class Book {
    constructor (name, author){
        this.name = name;
        this.author = author;

        this.showInfo = function(){
            var para = document.createElement("P");
            var t = document.createTextNode(this.name + " was written by " + this.author + ". The Eye of The World is the first book in the The Wheel of Time series. It debuted in 1990, and it has been first on the list of New York Times bestselling authors.");
            para.appendChild(t);
            document.getElementById("bookDetails").appendChild(para);
        };

        this.showBookTitle = function(){
            var titleHeader = document.createElement("h1");
            var titleText = document.createTextNode(this.name);
            titleHeader.appendChild(titleText);
            document.getElementById("branding").appendChild(titleHeader);
        };
        
    }
}

function productDetails(){
    document.getElementById("productDetails").addEventListener("click", theEyeOfTheWorld.createProductList(), false);
}
document.addEventListener("DOMContentLoaded", function(){
    productDetails();
})


class ProductDetails extends Book {
    constructor(name, author, genre, pages, isbn, publisher){
        super(name, author);
        this.genre = genre;
        this.pages = pages;
        this.isbn = isbn;
        this.publisher = publisher;

        
        //Function to create a list with product details.
        this.createProductList = function(){
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
            var textName = document.createTextNode("Title: "+ this.name);
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

function author(){
    var a = document.getElementById("authorButton");
    a.addEventListener("click", createAuthorDetails);
}

class AuthorDetails extends Book{
    constructor(name, author, series, birthdate){
        super(name, author);
        this.series = series;
        this.birthdate = birthdate;

        this.createAuthorDetails = function(){
            var p = document.createElement("P")
            var authorText = document.createTextNode(this.author + " is the author of the popular series by the name of " + this.series + ", of which the first book he wrote is " + this.name + ". " + this.author + " was born on " + this.birthdate + ". ");
            var authorText2 = document.createTextNode("He was born in Charleston, South Carolina. He learnt how to read when he was four, aided by his brother who was twelve years older. Robert has served in the U.S. Army, and he began writing in 1977. 13 years after he started writing, he released the first book in his bestseller The Wheel of Time.");
            p.appendChild(authorText);
            p.appendChild(authorText2);
            document.getElementById("openAuthor").appendChild(p);
        };
    }
}

function sectionChange(){
    document.getElementById("openAmazon").addEventListener("click", amazonInNewTab);
}
document.addEventListener("DOMContentLoaded", function(){
    sectionChange();
})

function amazonInNewTab(){
    var amazonUrl = "https://www.amazon.com/Eye-World-Wheel-Time-Book/dp/0812511816";
    var win = window.open(amazonUrl, "_blank");
    win.focus();
}

wheelOfTime = new Book("The Wheel of Time", "Robert Jordan");
eyeOfTheWorld = new Book("The Eye of The World", "Robert Jordan");
theEyeOfTheWorld = new ProductDetails("The Eye of The World", "Robert Jordan", "Fantasy Novel", "832 (Paperback)", "978-0812511819", "Tor Fantasy, November 15, 1990");
authorBook = new AuthorDetails("The Eye of The World", "Robert Jordan", "The Wheel of Time", "October 17, 1948");


