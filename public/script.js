// let bookTitle = document.getElementById("book-title"),
// 	authorName = document.getElementById("author-name"),
// 	pageCount = document.getElementById("page-count"),
// 	imageSrc = document.getElementById("image-src");

function bookInfo(book) {
	return `<li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
	
	<div class="mr-4">
		<img src="${book.image}" width="100px">
	</div>
  <div class="mr-auto mb-auto">
    <div class="book-title">${book.title}</div>
    <div class="author-name">Author: ${book.author}</div>
    <div class="page-count">Pages: ${book.pages}</div>
  </div>
  <div>
    <button data-id="${book._id}" class="edit-me btn btn-secondary btn-sm mr-1" data-toggle="modal" data-target="#bookModal">Edit</button>
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
		let newBookTitle = prompt(
			"Edit book title:",
			e.target.parentElement.parentElement.querySelector(".book-title")
				.innerHTML
		);
		if (newBookTitle) {
			axios
				.post("/edit-title", {
					title: newBookTitle,
					id: e.target.getAttribute("data-id")
				})
				.then(() => {
					e.target.parentElement.parentElement.querySelector(
						".book-title"
					).innerHTML = `<strong>${newBookTitle}</strong>`;
				})
				.catch(() => {
					console.log("Try again later!");
				});
		}
	}

	// Delete feature
	if (e.target.classList.contains("delete-me")) {
		// alert(e.target.getAttribute("data-id"));
		if (confirm("Delete item permanently?")) {
			axios
				.post("/delete-item", {
					id: e.target.getAttribute("data-id")
				})
				.then(() => {
					e.target.parentElement.parentElement.remove();
				})
				.catch(() => {
					console.log("Try again later!");
				});
		}
	}
});
