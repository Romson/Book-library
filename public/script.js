// let bookTitle = document.getElementById("book-title"),
// 	authorName = document.getElementById("author-name"),
// 	pageCount = document.getElementById("page-count"),
// 	imageSrc = document.getElementById("image-src");

function bookInfo(book) {
	return `<li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between"><div class="item-text mr-4"><img src="${book.image}" width="100px"></div>
  <div class="item-text mr-auto mb-auto">
    <strong><span>${book.title}</span></strong><br>
    Author: <span>${book.author}</span><br>
    Pages: <span>${book.pages}</span><br>
  </div>
  <div>
    <button data-id="${book._id}" class="edit-me btn btn-secondary btn-sm mr-1">Edit</button>
    <button data-id="${book._id}" class="delete-me btn btn-danger btn-sm">Delete</button>
  </div>
</li>`;
}

let ulHTML = bookObject.map(book => {
	return bookInfo(book);
});

document.getElementById("book-list").insertAdjacentHTML("beforeend", ulHTML);

document.addEventListener("click", e => {
	// Edit feature
	if (e.target.classList.contains("edit-me")) {
		alert(e.target.getAttribute("data-id"));
	}
	// Delete feature
	if (e.target.classList.contains("delete-me")) {
		alert(e.target.getAttribute("data-id"));
	}
});
