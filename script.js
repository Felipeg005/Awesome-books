const form = document.getElementById('form');
let count = 0;

function changeBgColor(bookContainer) {
  if (count === 0) {
    bookContainer.style.backgroundColor = 'rgb(245 245 245)';
    count += 1;
  } else {
    bookContainer.style.backgroundColor = '#ffffff';
    count -= 1;
  }
}

class BookArray {
  constructor() {
    this.books = [];
    this.bookStorage = JSON.parse(localStorage.getItem('bookStorage'));
  }

  Add(item) {
    this.bookStorage = JSON.parse(localStorage.getItem('bookStorage'));
    this.books = [];
    if (this.bookStorage) {
      for (let i = 0; i < this.bookStorage.length; i += 1) {
        this.books.push(this.bookStorage[i]);
      }
    }
    this.books.push(item);
    localStorage.setItem('bookStorage', JSON.stringify(this.books));
  }

  Get() {
    this.bookStorage = JSON.parse(localStorage.getItem('bookStorage'));
    this.books = JSON.parse(localStorage.getItem('bookStorage'));
    if (this.bookStorage) {
      for (let i = 0; i < this.bookStorage.length; i += 1) {
        const bookContainer = document.createElement('div');
        const classes = 'd-flex column bd-highlight border'.split(' ');
        bookContainer.classList.add(...classes);
        const bookAuthor = document.createElement('h3');
        const title = document.createElement('h2');
        bookAuthor.classList.add('d-flex', 'align-items-center', 'm-1', 'col', 'p-2', 'bd-highlight', 'text-break', 'text-capitalize', 'fs-6');
        title.classList.add('m-1', 'd-flex', 'align-items-center', 'p-2', 'bd-highlight', 'text-uppercase', 'fs-5');
        const removeButton = document.createElement('button');
        const separateLine = document.createElement('hr');
        bookContainer.id = `container${this.bookStorage[i].title}`;
        removeButton.id = `${this.bookStorage[i].title}`;
        removeButton.setAttribute('onclick', 'removeBook(this.id)');
        title.innerText = this.bookStorage[i].title;
        bookAuthor.innerHTML = `By ${this.bookStorage[i].author}`;
        removeButton.innerHTML = 'Remove Book';
        removeButton.classList.add('m-1', 'text-white', 'btn', 'btn-danger', 'ml-auto', 'p-2', 'bd-highlight');
        const booksDiv = document.getElementById('books');
        booksDiv.insertBefore(bookContainer, booksDiv.firstChild);
        document.getElementById(`container${this.bookStorage[i].title}`).appendChild(title);
        document.getElementById(`container${this.bookStorage[i].title}`).appendChild(bookAuthor);
        document.getElementById(`container${this.bookStorage[i].title}`).appendChild(removeButton);
        document.getElementById(`container${this.bookStorage[i].title}`).appendChild(separateLine);
        this.books.push(this.bookStorage[i]);
        changeBgColor(bookContainer);
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

  add() {
    this.title = document.getElementById('title').value;
    this.author = document.getElementById('author').value;
    const bookContainer = document.createElement('div');
    const classes = 'd-flex column bd-highlight border'.split(' ');
    bookContainer.classList.add(...classes);
    bookContainer.classList.add('book-card');
    const bookAuthor = document.createElement('h3');
    const title = document.createElement('h2');
    bookAuthor.classList.add('d-flex', 'align-items-center', 'm-1', 'col', 'p-2', 'bd-highlight', 'text-break', 'text-capitalize', 'fs-6');
    title.classList.add('m-1', 'd-flex', 'align-items-center', 'p-2', 'bd-highlight', 'text-uppercase', 'fs-5');
    const removeButton = document.createElement('button');
    const separateLine = document.createElement('hr');
    bookContainer.id = `container${this.title}`;
    removeButton.id = `${this.title}`;
    removeButton.setAttribute('onclick', 'removeBook(this.id)');
    title.innerText = this.title;
    bookAuthor.innerHTML = `By ${this.author}`;
    removeButton.innerHTML = 'Remove Book';
    removeButton.classList.add('m-1', 'text-white', 'btn', 'btn-danger', 'ml-auto', 'p-2', 'bd-highlight');
    const booksDiv = document.getElementById('books');
    booksDiv.insertBefore(bookContainer, booksDiv.firstChild);
    document.getElementById(`container${this.title}`).appendChild(title);
    document.getElementById(`container${this.title}`).appendChild(bookAuthor);
    document.getElementById(`container${this.title}`).appendChild(removeButton);
    document.getElementById(`container${this.title}`).appendChild(separateLine);
    const newBook = new Book(this.title, this.author);
    BooksArray.Add(newBook);
    changeBgColor(bookContainer);
    form.reset();
  }
}
const saveBook = new Book();

function removeBook(buttonId) {
  if (buttonId) {
    const bookToRemove = document.getElementById(`container${buttonId}`);
    bookToRemove.parentNode.removeChild(bookToRemove);
    for (let i = 0; i < BooksArray.bookStorage.length; i += 1) {
      if (BooksArray.bookStorage[i].title === buttonId) {
        BooksArray.bookStorage.splice(i, 1);
        localStorage.setItem('bookStorage', JSON.stringify(BooksArray.bookStorage));
        break;
      }
    }
  }
}
removeBook();
/* eslint max-classes-per-file: ["error", 2] */
import { DateTime } from "https://moment.github.io/luxon/es6/luxon.js";
const time = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
const timeContainer = document.querySelector('#dateTime');
const date = document.createElement('p');
date.innerHTML = time;
date.classList.add('float-right', 'me-5', 'my-3');
timeContainer.appendChild(date);

document.addEventListener('DOMContentLoaded', BooksArray.Get);
form.addEventListener('submit', (...e) => {
  saveBook.add(...e);
});
