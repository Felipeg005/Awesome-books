const form = document.getElementById('form');
class BookArray {
  constructor() {
    this.books = [];
    this.bookStorage = JSON.parse(localStorage.getItem('bookStorage'));
  }

  Add(item) {
    this.bookStorage = JSON.parse(localStorage.getItem('bookStorage'));
    this.books = [];
    if(this.bookStorage){
      for (let i = 0; i < this.bookStorage.length; i += 1){
        this.books.push(this.bookStorage[i]);
      }
    }
    this.books.push(item);
    localStorage.setItem('bookStorage', JSON.stringify(this.books));
  }

  Get() {
    this.books = [];
    this.bookStorage = JSON.parse(localStorage.getItem('bookStorage'));
    if (this.bookStorage) {
      for (let i = 0; i < this.bookStorage.length; i += 1) {
        const bookContainer = document.createElement('div');
        const bookAuthor = document.createElement('h3');
        const title = document.createElement('h2');
        const removeButton = document.createElement('button');
        const separateLine = document.createElement('hr');
        bookContainer.id = `container${this.bookStorage[i].title}`;
        removeButton.id = `${this.bookStorage[i].title}`;
        removeButton.setAttribute('onclick', 'removeBook(this.id)');
        title.innerText = this.bookStorage[i].title;
        bookAuthor.innerHTML = this.bookStorage[i].author;
        removeButton.innerHTML = 'Remove Book';
        const booksDiv = document.getElementById('books');
        booksDiv.insertBefore(bookContainer, booksDiv.firstChild);
        document.getElementById(`container${this.bookStorage[i].title}`).appendChild(title);
        document.getElementById(`container${this.bookStorage[i].title}`).appendChild(bookAuthor);
        document.getElementById(`container${this.bookStorage[i].title}`).appendChild(removeButton);
        document.getElementById(`container${this.bookStorage[i].title}`).appendChild(separateLine);
        this.books.push(this.bookStorage[i]);
      }
    }
  }
}
const BooksArray = new BookArray();

class Book {
  constructor() {
    this.title = document.getElementById('title').value;
    this.author = document.getElementById('author').value;
  }

  add(e) {
    this.title = document.getElementById('title').value;
    this.author = document.getElementById('author').value;
    e.preventDefault();
    const bookContainer = document.createElement('div');
    const bookAuthor = document.createElement('h3');
    const title = document.createElement('h2');
    const removeButton = document.createElement('button');
    const separateLine = document.createElement('hr');
    bookContainer.id = `container${this.title}`;
    removeButton.id = `${this.title}`;
    removeButton.setAttribute('onclick', 'removeBook(this.id)');
    title.innerText = this.title;
    bookAuthor.innerHTML = this.author;
    removeButton.innerHTML = 'Remove Book';
    const booksDiv = document.getElementById('books');
    booksDiv.insertBefore(bookContainer, booksDiv.firstChild);
    document.getElementById(`container${this.title}`).appendChild(title);
    document.getElementById(`container${this.title}`).appendChild(bookAuthor);
    document.getElementById(`container${this.title}`).appendChild(removeButton);
    document.getElementById(`container${this.title}`).appendChild(separateLine);
    const newBook = new Book(this.title, this.author);
    BooksArray.Add(newBook);
    form.reset();
  }
}
const saveBook = new Book();

function removeBook(buttonId) {
  if(buttonId){
  const bookToRemove = document.getElementById(`container${buttonId}`);
  bookToRemove.parentNode.removeChild(bookToRemove);
  for (let i = 0; i < BooksArray.bookStorage.length; i += 1) {
    if (BooksArray.bookStorage[i].title === buttonId) {
      BooksArray.bookStorage.splice(i, 1);
      localStorage.setItem('bookStorage', JSON.stringify(BooksArray.bookStorage));
      break;
    }
  }}
}

removeBook();
/* eslint max-classes-per-file: ["error", 2] */
document.addEventListener('DOMContentLoaded', BooksArray.Get);
form.addEventListener('submit', (...e) => {
  saveBook.add(...e);
});
