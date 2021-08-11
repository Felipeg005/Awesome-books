<<<<<<< HEAD
class BookArray {
  constructor() {
    this.books = [];
    this.bookStorage = JSON.parse(localStorage.getItem('bookStorage'));
  }
  Add(item) {
    this.books.push(item);
    localStorage.setItem('bookStorage', JSON.stringify(this.books));
    console.log(this.books);
}
  Get(){
    console.log(BooksArray.books);
    console.log(BooksArray.bookStorage);
    if (BooksArray.bookStorage) {
      for (let i = 0; i < BooksArray.bookStorage.length; i += 1){
        const bookContainer = document.createElement('div');
        const bookAuthor = document.createElement("h3");
        const title = document.createElement("h2");
        const removeButton = document.createElement('button');
        const separateLine = document.createElement('hr');
        bookContainer.id = `container${BooksArray.bookStorage[i].title}`;
        removeButton.id = `${BooksArray.bookStorage[i].title}`;
        removeButton.setAttribute('onclick', `saveBook.removeBook(this.id)`);
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
        console.log(BooksArray.books);
      }
    }
  }
}
=======
const books = [];
const titlePlace = document.getElementById('title').value;
const authorPlace = document.getElementById('author').value;
>>>>>>> 364588dcf502df87f239b1d7fff1a926b2d09874

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  add(event) {
<<<<<<< HEAD
    const titlePlace = document.getElementById('title');
    const authorPlace = document.getElementById('author');
    var books = [];
=======
>>>>>>> 364588dcf502df87f239b1d7fff1a926b2d09874
    event.preventDefault();
    const bookContainer = document.createElement('div');
    const bookAuthor = document.createElement('h3');
    const title = document.createElement('h2');
    const removeButton = document.createElement('button');
    const separateLine = document.createElement('hr');
<<<<<<< HEAD
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
    console.log(BooksArray.books);
    form.reset();
  }
  /* eslint-disable */removeBook(buttonId) {
    const bookToRemove = document.getElementById('container'+`${buttonId}`);
    bookToRemove.parentNode.removeChild(bookToRemove);
    for (let i = 0; i < BooksArray.books.length; i += 1) {
      if (BooksArray.books[i].title === buttonId) {
        BooksArray.books.splice(i, 1);
        localStorage.setItem('bookStorage', JSON.stringify(BooksArray.books));
        console.log(BooksArray.books);
        break;
      }
    }
  }
}

const form = document.getElementById('form');
const saveBook = new Book();
const BooksArray = new BookArray();

document.addEventListener('DOMContentLoaded', BooksArray.Get);
form.addEventListener('submit', (...e) => {
  saveBook.add(...e);
});
=======
    bookContainer.id = `container${this.title}`;
    removeButton.id = `${this.title}`;
    removeButton.setAttribute('onclick', 'book.removeBook(this.id)');
    title.innerText = `${this.title}`;
    bookAuthor.innerHTML = `${this.author}`;
    removeButton.innerHTML = 'Remove Book';
    const booksDiv = document.getElementById('books');
    booksDiv.insertBefore(bookContainer, booksDiv.firstChild);
    document.getElementById(`container${this.title}`).appendChild(title);
    document.getElementById(`container${this.title}`).appendChild(bookAuthor);
    document.getElementById(`container${this.title}`).appendChild(removeButton);
    document.getElementById(`container${this.title}`).appendChild(separateLine);
    const newBook = new Book(`${this.title}`, `${this.author}`);
    books.push(newBook);
    localStorage.setItem('bookStorage', JSON.stringify(books));
    form.reset();
    console.log(this.name);
    console.log(this.title);
    console.log(this.author);
  }

  /* eslint-disable */removeBook(buttonId) {
    const bookToRemove = document.getElementById('container'+`${buttonId}`);
    bookToRemove.parentNode.removeChild(bookToRemove);
    for (let i = 0; i < books.length; i += 1) {
      if (books[i].title === buttonId) {
        books.splice(i, 1);
        localStorage.setItem('bookStorage', JSON.stringify(books));
        break;
      }
    }
  }
  
}

const form = document.getElementById('form');
const book = new Book('yyyyy', 'zzzzz');





function loadBooks() {
const bookStorage = JSON.parse(localStorage.getItem('bookStorage'));
  if (bookStorage) {
    for (let i = 0; i < bookStorage.length; i += 1){
      const bookContainer = document.createElement('div');
      const bookAuthor = document.createElement("h3");
      const title = document.createElement("h2");
      const removeButton = document.createElement('button');
      const separateLine = document.createElement('hr');
      bookContainer.id = `container${bookStorage[i].title}`;
      removeButton.id = `${bookStorage[i].title}`;
      removeButton.setAttribute('onclick', `book.removeBook(this.id)`);
      title.innerText = bookStorage[i].title;
      bookAuthor.innerHTML = bookStorage[i].author;
      removeButton.innerHTML = 'Remove Book';
      const booksDiv = document.getElementById('books')
      booksDiv.insertBefore(bookContainer, booksDiv.firstChild);
      document.getElementById(`container${bookStorage[i].title}`).appendChild(title);
      document.getElementById(`container${bookStorage[i].title}`).appendChild(bookAuthor);
      document.getElementById(`container${bookStorage[i].title}`).appendChild(removeButton);
      document.getElementById(`container${bookStorage[i].title}`).appendChild(separateLine);
      let newBook = {
        title: bookStorage[i].title, 
        author: bookStorage[i].author,
      }
  books.push(newBook);
  }
}
localStorage.setItem('bookStorage', JSON.stringify(books));
}

document.addEventListener('DOMContentLoaded', loadBooks);
form.addEventListener('submit', book.add);
>>>>>>> 364588dcf502df87f239b1d7fff1a926b2d09874
