function addToLibrary() {
	let book = `
    <div class="zone col">
      <p onclick="showBookInfo(this)">
        <img src="${imageSrc.value}" width="100%" alt="book">
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
  imageSrc.value = "";
}

function deleteFromLibrary(itemToDelete) {
	itemToDelete.parentElement.remove();
}
function addToArray() {
  book_array.unshift(new Library(myForm[0].value, myForm[1].value, myForm[2].value, myForm[3].value));
}
function showBookInfo(element) {
  alert(element.innerText);
}