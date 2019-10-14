const myForm = document.querySelector('#myForm'),
    bookTitle = document.querySelector('#title'),
    athourName = document.querySelector('#author'),
    pageCount = document.querySelector('#pages'),
    imageSrc = document.querySelector('#image'),
    myButton = document.querySelector('#myButton'),
    container = document.querySelector('.container');

myButton.addEventListener('click', (e) => {
  e.preventDefault();
  addToLibrary();
  console.log(bookTitle.value);
});

function addToLibrary() {
  let book = `
    <div class="zone col">
      <img src="${imageSrc.value}" width="100%" alt="book">
      <p>
        <strong>${bookTitle.value}</strong><br>
        By: ${athourName.value}<br>
        Pagecount: ${pageCount.value}
      </p>
      <button onclick="deleteFromLibrary(this)">Remove</button>
    </div>`
  container.insertAdjacentHTML('afterbegin', book);
  bookTitle.value = ''; athourName.value = ''; pageCount.value = '';
  bookTitle.focus();
}

function deleteFromLibrary(itemToDelete) {
  itemToDelete.parentElement.remove();
}
