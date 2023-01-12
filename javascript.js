let myLibrary = [];

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

function addBookToLibrary(usersInput) {
  //take users input and stores new book object into myLibrary array
}

function bookPlacementLoop() {
  //loops through the array and displays each book on the page
}

let book1 = new Book("book one", "john doe", 150, true);
let book2 = new Book("book one", "john doe", 150, true);
let book3 = new Book("book one", "john doe", 150, true);
let book4 = new Book("book one", "john doe", 150, true);
let book5 = new Book("book one", "john doe", 150, true);

console.log(book1);

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);
myLibrary.push(book5);

console.log(myLibrary);
////////////////////////////////////////////////////////////////////////////////
let addBookBtn = document.querySelector(".add-book-btn");
let form= document.querySelector(".form");
let overlay= document.querySelector(".overlay");

addBookBtn.addEventListener("click", () => {
  displayPopup();
});

function displayPopup() {
  form.classList.add("active");
  overlay.classList.add("active");
}
