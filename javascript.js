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
////////////////////////////////////////////////////////////////////////////////

// CONNECTIONS
let addBookBtn = document.querySelector(".add-book-btn");
let form= document.querySelector(".form");
let overlay= document.querySelector(".overlay");
let closeFormBtn = document.querySelector(".close-btn");
let submitBtn = document.getElementById("submit-btn");
let title= document.getElementById("title"); //title.value= title
let author = document.getElementById("author");
let pageNumbers = document.getElementById("page_numbers");
let readStatus = document.getElementsByName("read_status"); //node list
let readStatusArray=Array.from(readStatus);

// EVENTS(WHAT TO DO)
addBookBtn.addEventListener("click", () => {
  openPopup();
});

closeFormBtn.addEventListener("click", ()=>{
  closePopup();
});

overlay.addEventListener("click", ()=>{
  closePopup();  
});

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  let newBook= new Book(title.value, author.value, pageNumbers.value, radioValue());
  myLibrary.push(newBook);
  closePopup();
});

// FUNCTIONS
function openPopup() {
  form.classList.add("active");
  overlay.classList.add("active");
};

function closePopup(){
   form.classList.remove("active");
   overlay.classList.remove("active");
}

function radioValue() {
  if (readStatusArray[0].checked===true){
    return readStatusArray[0].value;
  }else{
    return readStatusArray[1].value;
  }
};

//seeing myLibrary
console.log(myLibrary);