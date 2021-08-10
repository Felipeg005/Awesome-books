const books = [];
const titlePlace = document.getElementById('title');
const authorPlace = document.getElementById('author');

class Book {
  constructor(title, author) {
    this.title = titlePlace.value;
    this.author = authorPlace.value;
  }
  add(event) {
    const bookContainer = document.createElement('div');
    const bookAuthor = document.createElement('h3');
    const title = document.createElement('h2');
    const removeButton = document.createElement('button');
    const separateLine = document.createElement('hr');
    bookContainer.id = `container${title}`;
    removeButton.id = `${title}`;
    removeButton.setAttribute('onclick', 'book.removeBook(this.id)');
    title.innerText = title;
    bookAuthor.innerHTML = author;
    removeButton.innerHTML = 'Remove Book';
    const booksDiv = document.getElementById('books');
    booksDiv.insertBefore(bookContainer, booksDiv.firstChild);
    document.getElementById(`container${title}`).appendChild(title);
    document.getElementById(`container${title}`).appendChild(bookAuthor);
    document.getElementById(`container${title}`).appendChild(removeButton);
    document.getElementById(`container${title}`).appendChild(separateLine);
    const newBook = new Book(title, author);
    books.push(newBook);
    localStorage.setItem('bookStorage', JSON.stringify(books));
    form.reset();
    event.preventDefault();
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


const book = new Book(titlePlace.value, authorPlace.value);




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
