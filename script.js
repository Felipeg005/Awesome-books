let books =[{
  title: "",
  author:"",
}];

const titlePlace = document.getElementById("title");
const authorPlace = document.getElementById("author");
const addButton = document.getElementById("add-button");
const form = document.getElementById('form');

function add(event) {
  event.preventDefault();
  let bookAuthor = document.createElement("h3");
  let title = document.createElement("h2");
  title.innerText = titlePlace.value;
  bookAuthor.innerHTML = authorPlace.value;
  document.getElementById('books').appendChild(title);
  document.getElementById('books').appendChild(bookAuthor);
  form.reset();
}

form.addEventListener('submit', add);

