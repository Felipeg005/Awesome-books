const form = document.getElementById('form');
class BookArray {
  constructor() {
    this.books = [];
    this.bookStorage;
  }

  Add(item) {
    this.books.push(item);
    localStorage.setItem('bookStorage', JSON.stringify(this.books));
  }

  Get() {
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
        removeButton.setAttribute('onclick', 'saveBook.removeBook(this.id)');
        title.innerText = this.bookStorage[i].title;
        bookAuthor.innerHTML = this.bookStorage[i].author;
        removeButton.innerHTML = 'Remove Book';
        const booksDiv = document.getElementById('books')
        booksDiv.insertBefore(bookContainer, booksDiv.firstChild);
        document.getElementById(`container${this.bookStorage[i].title}`).appendChild(title);
        document.getElementById(`container${this.bookStorage[i].title}`).appendChild(bookAuthor);
        document.getElementById(`container${this.bookStorage[i].title}`).appendChild(removeButton);
        document.getElementById(`container${this.bookStorage[i].title}`).appendChild(separateLine);
        BooksArray.Add(this.bookStorage[i]);
      }
    }
  }
}

const BooksArray = new BookArray();

// const form = document.getElementById('form');

class Book {
  constructor() {
    this.title = document.getElementById('title').value;
    this.author = document.getElementById('author').value;
  }

  preventDefault(event) {
    event.preventDefault();
  }

  add() {
    this.title = document.getElementById('title').value;
    this.author = document.getElementById('author').value;
    console.log(this.title);
    this.preventDefault;
    // const titlePlace = document.getElementById('title');
    // const authorPlace = document.getElementById('author');
    const bookContainer = document.createElement('div');
    const bookAuthor = document.createElement('h3');
    const title = document.createElement('h2');
    const removeButton = document.createElement('button');
    const separateLine = document.createElement('hr');
    bookContainer.id = `container${this.title}`;
    removeButton.id = `${this.title}`;
    removeButton.setAttribute('onclick', 'saveBook.removeBook(this.id)');
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
    BooksArray.Add (newBook);
    form.reset();
    console.log(this.title);
  }

  /* eslint-disable */removeBook(buttonId) {
    const bookToRemove = document.getElementById('container'+`${buttonId}`);
    bookToRemove.parentNode.removeChild(bookToRemove);
    for (let i = 0; i < BooksArray.books.length; i += 1) {
      if (BooksArray.books[i].title === buttonId) {
        BooksArray.books.splice(i, 1);
        localStorage.setItem('bookStorage', JSON.stringify(BooksArray.books));
        break;
      }
    }
  }
}
const saveBook = new Book();

document.addEventListener('DOMContentLoaded', BooksArray.Get);
form.addEventListener('submit', (...e) => {
  saveBook.add(...e);
  saveBook.preventDefault(...e);
});
