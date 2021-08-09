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
  bookContainer.id = 'container'+`${titlePlace.value}`;
  removeButton.id = `${titlePlace.value}`;
  removeButton.setAttribute('onclick', `removeBook(this.id)`);
  title.innerText = titlePlace.value;
  bookAuthor.innerHTML = authorPlace.value;
  removeButton.innerHTML = 'Remove Book';
  document.getElementById('books').appendChild(bookContainer);
  document.getElementById('container'+`${titlePlace.value}`).appendChild(title);
  document.getElementById('container'+`${titlePlace.value}`).appendChild(bookAuthor);
  document.getElementById('container'+`${titlePlace.value}`).appendChild(removeButton);
  

  let newBook = {
    title: titlePlace.value, 
    author: authorPlace.value,
  }

  books.push(newBook);

  console.log(books);

  form.reset();
}


function removeBook(buttonId) {
  
  const bookToRemove = document.getElementById('container'+`${buttonId}`);
  bookToRemove.parentNode.removeChild(bookToRemove);
  
  for (let i = 0; i < books.length; i += 1) {

  if (books[i].title === buttonId) {
    books.splice(i, 1);
    console.log(books);
    break;
  }
}
}

form.addEventListener('submit', add);
// removeButton.addEventListener('click', removeBook);