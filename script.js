let books =[];

const titlePlace = document.getElementById('title');
const authorPlace = document.getElementById('author');
const addButton = document.getElementById('add-button');
const form = document.getElementById('form');

function add(event) {
  event.preventDefault();
  const bookContainer = document.createElement('div');
  const bookAuthor = document.createElement("h3");
  const title = document.createElement("h2");
  const removeButton = document.createElement('button');
  const separateLine = document.createElement('hr');
  bookContainer.id = 'container'+`${titlePlace.value}`;
  removeButton.id = `${titlePlace.value}`;
  removeButton.setAttribute('onclick', `removeBook(this.id)`);
  title.innerText = titlePlace.value;
  bookAuthor.innerHTML = authorPlace.value;
  removeButton.innerHTML = 'Remove Book';
  const booksDiv = document.getElementById('books')
  booksDiv.insertBefore(bookContainer, booksDiv.firstChild);
  document.getElementById('container'+`${titlePlace.value}`).appendChild(title);
  document.getElementById('container'+`${titlePlace.value}`).appendChild(bookAuthor);
  document.getElementById('container'+`${titlePlace.value}`).appendChild(removeButton);
  document.getElementById('container'+`${titlePlace.value}`).appendChild(separateLine);
  

  let newBook = {
    title: titlePlace.value, 
    author: authorPlace.value,
  }
  

  books.push(newBook);

  console.log(books);

  localStorage.setItem('bookStorage', JSON.stringify(books));

  form.reset();
}


function removeBook(buttonId) {
  
  const bookToRemove = document.getElementById('container'+`${buttonId}`);
  bookToRemove.parentNode.removeChild(bookToRemove);
  
  for (let i = 0; i < books.length; i += 1) {

  if (books[i].title === buttonId) {
    books.splice(i, 1);
    console.log(books);
    localStorage.setItem('bookStorage', JSON.stringify(books));
    break;
  }
}
}

function loadBooks() {
const bookStorage = JSON.parse(localStorage.getItem('bookStorage'));
if (bookStorage) {
  for (let i = 0; i < bookStorage.length; i += 1){
  const bookContainer = document.createElement('div');
  const bookAuthor = document.createElement("h3");
  const title = document.createElement("h2");
  const removeButton = document.createElement('button');
  const separateLine = document.createElement('hr');
  bookContainer.id = 'container'+`${bookStorage[i].title}`;
  removeButton.id = `${bookStorage[i].title}`;
  removeButton.setAttribute('onclick', `removeBook(this.id)`);
  title.innerText = bookStorage[i].title;
  bookAuthor.innerHTML = bookStorage[i].author;
  removeButton.innerHTML = 'Remove Book';
  const booksDiv = document.getElementById('books')
  booksDiv.insertBefore(bookContainer, booksDiv.firstChild);
  document.getElementById('container'+`${bookStorage[i].title}`).appendChild(title);
  document.getElementById('container'+`${bookStorage[i].title}`).appendChild(bookAuthor);
  document.getElementById('container'+`${bookStorage[i].title}`).appendChild(removeButton);
  document.getElementById('container'+`${bookStorage[i].title}`).appendChild(separateLine);
  
  let newBook = {
    title: bookStorage[i].title, 
    author: bookStorage[i].author,
  }
  

  books.push(newBook);
}
}
localStorage.setItem('bookStorage', JSON.stringify(books));
console.log(books);
}

document.addEventListener('DOMContentLoaded', loadBooks);
form.addEventListener('submit', add);