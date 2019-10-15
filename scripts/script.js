const myForm = document.querySelector("#myForm"),
	bookTitle = document.querySelector("#title"),
	authorName = document.querySelector("#author"),
	pageCount = document.querySelector("#pages"),
	imageSrc = document.querySelector("#image"),
	myButton = document.querySelector("#myButton"),
  container = document.querySelector(".container");

let book_array = [];

class Library {
  constructor(title, author, pages, image) {
    this.title = title; this.author = author;
    this.pages = pages; this.image = image;
  }
  bookInfo() {
    return `Book title: ${this.title}. By author: ${this.author}. And has a pagecount of: ${this.pages} pages.`;
  }
}

myForm.addEventListener("submit", e => {
	e.preventDefault();
	addToLibrary();
});