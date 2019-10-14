const myForm = document.querySelector("#myForm"),
	bookTitle = document.querySelector("#title"),
	authorName = document.querySelector("#author"),
	pageCount = document.querySelector("#pages"),
	imageSrc = document.querySelector("#image"),
	myButton = document.querySelector("#myButton"),
	container = document.querySelector(".container");

myForm.addEventListener("submit", e => {
	e.preventDefault();
	addToLibrary();
});

function addToLibrary() {
	let book = `
    <div class="zone col">
      <img src="${imageSrc.value}" width="100%" alt="book">
      <p>
        <strong>${bookTitle.value}</strong><br>
        By: ${authorName.value}<br>
        Pagecount: ${pageCount.value}
      </p>
      <button onclick="deleteFromLibrary(this)">Remove</button>
    </div>`;
	addToArray();
	container.insertAdjacentHTML("afterbegin", book);
	bookTitle.value = ""; authorName.value = ""; pageCount.value = "";
	bookTitle.focus();
}

function deleteFromLibrary(itemToDelete) {
	itemToDelete.parentElement.remove();
}

class Library {
	constructor(title, author, pages, image) {
		this.title = title; this.author = author;
		this.pages = pages; this.image = image;
	}
}

let book_array = [];

function addToArray() {
	let bookName = `${bookTitle.value}`;
	let author = `${authorName.value}`;
	let pages = `${pageCount.value}`;
	let img = `${imageSrc.value}`;
	library.unshift(new Library(bookName, author, pages, img));
}
