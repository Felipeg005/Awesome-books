let books =[];

const titlePlace = document.getElementById('title');
const authorPlace = document.getElementById('author');
const addButton = document.getElementById('add-button');
const form = document.getElementById('form');

function add(event) {
  event.preventDefault();
  let bookAuthor = document.createElement("h3");
  let title = document.createElement("h2");
  let removeButton = document.createElement('button');
  title.innerText = titlePlace.value;
  bookAuthor.innerHTML = authorPlace.value;
  removeButton.innerHTML = 'Remove Book';
  document.getElementById('books').appendChild(title);
  document.getElementById('books').appendChild(bookAuthor);
  document.getElementById('books').appendChild(removeButton);
  

  let newBook = {
    title: titlePlace.value, 
    author: authorPlace.value,
  }

  books.push(newBook);

  console.log(books);
  console.log(authorPlace.value);
  console.log(titlePlace.value);

  form.reset();
}

function removeBook() {

}

form.addEventListener('submit', add);

