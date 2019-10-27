// let bookTitle = document.getElementById("book-title"),
// 	authorName = document.getElementById("author-name"),
// 	pageCount = document.getElementById("page-count"),
// 	imageSrc = document.getElementById("image-src");

// document.getElementById("book-form").addEventListener("submit", e => {
// 	e.preventDefault();

// 	axios
// 		.post("/add-book", {
// 			booktitle: bookTitle.value
// 		})
// 		.then(response => {
// 			// Do something here
// 		})
// 		.catch(() => {
// 			console.log("Something went wrong. Try again later");
// 		});
// });

function bookInfo(book) {
	return `<li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between"><div class="item-text mr-4"><img src="${book.image}" width="100px"></div>
  <div class="item-text mr-auto mt-0">
    <strong>${book.title}</strong><br>
    Author: ${book.author}<br>
    Pages: ${book.pages}<br><br><br><br>
  </div>
  <div>
    <button data-id="${book._id}" class="edit-me btn btn-secondary btn-sm mr-1">Edit</button>
    <button data-id="${book._id}" class="delete-me btn btn-danger btn-sm">Delete</button>
  </div>
</li>`;
}

let ulHTML = bookObject
	.map(book => {
		return bookInfo(book);
	})
	.join("");

document.getElementById("book-list").insertAdjacentHTML("beforeend", ulHTML);
