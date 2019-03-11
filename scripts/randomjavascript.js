class Book {
    constructor (name, author){
        this.name = name;
        this.author = author;
        this.showInfo = function(){
            var para = document.createElement("P");
            var t = document.createTextNode(this.name + " was written by " + this.author + ".");
            para.appendChild(t);
            document.body.appendChild(para);
        };
    }
}

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
            //Append unordered list to page.
            document.body.appendChild(x);
          
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

//Instantiate the ProductDetails class.
eyeOfTheWorld = new ProductDetails("<b> The Eye of The World </b>", "Robert Jordan", "Fantasy Novel", "832 (Paperback)", "978-0812511819", "Tor Fantasy, November 15, 1990");




