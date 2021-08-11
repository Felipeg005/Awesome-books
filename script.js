const form = document.getElementById('form');
const saveBook = new Book();
const BooksArray = new BookArray();

class BookArray {
  constructor() {
    this.books = [];
    this.bookStorage = JSON.parse(localStorage.getItem('bookStorage'));
  }

  Add(item) {
    this.books.push(item);
    localStorage.setItem('bookStorage', JSON.stringify(this.books));
  }
  Get(){
    if (BooksArray.bookStorage) {
      for (let i = 0; i < BooksArray.bookStorage.length; i += 1) {
        const bookContainer = document.createElement('div');
        const bookAuthor = document.createElement('h3');
        const title = document.createElement('h2');
        const removeButton = document.createElement('button');
        const separateLine = document.createElement('hr');
        bookContainer.id = `container${BooksArray.bookStorage[i].title}`;
        removeButton.id = `${BooksArray.bookStorage[i].title}`;
        removeButton.setAttribute('onclick', 'saveBook.removeBook(this.id)');
        title.innerText = BooksArray.bookStorage[i].title;
        bookAuthor.innerHTML = BooksArray.bookStorage[i].author;
        removeButton.innerHTML = 'Remove Book';
        const booksDiv = document.getElementById('books')
        booksDiv.insertBefore(bookContainer, booksDiv.firstChild);
        document.getElementById(`container${BooksArray.bookStorage[i].title}`).appendChild(title);
        document.getElementById(`container${BooksArray.bookStorage[i].title}`).appendChild(bookAuthor);
        document.getElementById(`container${BooksArray.bookStorage[i].title}`).appendChild(removeButton);
        document.getElementById(`container${BooksArray.bookStorage[i].title}`).appendChild(separateLine);
        BooksArray.Add(BooksArray.bookStorage[i]);
      }
    }
  }
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  add(event) {
    const titlePlace = document.getElementById('title');
    const authorPlace = document.getElementById('author');
    event.preventDefault();
    const bookContainer = document.createElement('div');
    const bookAuthor = document.createElement('h3');
    const title = document.createElement('h2');
    const removeButton = document.createElement('button');
    const separateLine = document.createElement('hr');
    bookContainer.id = `container${titlePlace.value}`;
    removeButton.id = `${titlePlace.value}`;
    removeButton.setAttribute('onclick', 'saveBook.removeBook(this.id)');
    title.innerText = titlePlace.value;
    bookAuthor.innerHTML = authorPlace.value;
    removeButton.innerHTML = 'Remove Book';
    const booksDiv = document.getElementById('books');
    booksDiv.insertBefore(bookContainer, booksDiv.firstChild);
    document.getElementById(`container${titlePlace.value}`).appendChild(title);
    document.getElementById(`container${titlePlace.value}`).appendChild(bookAuthor);
    document.getElementById(`container${titlePlace.value}`).appendChild(removeButton);
    document.getElementById(`container${titlePlace.value}`).appendChild(separateLine);
    const newBook = new Book(titlePlace.value, authorPlace.value);
    BooksArray.Add (newBook);
    books.push(newBook);
    form.reset();
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

document.addEventListener('DOMContentLoaded', BooksArray.Get);
form.addEventListener('submit', (...e) => {
  saveBook.add(...e);
});
