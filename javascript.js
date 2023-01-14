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
let main= document.getElementById("main");

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
  pushBookToLibrary();
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

function pushBookToLibrary() {
  for (let i = 0; i < 1; i++) {
    let divCard= document.createElement("div");
    divCard.classList.add("card");
    divCard.setAttribute("id", `card-${myLibrary.length}`);
    divCard.textContent=`Book Number: ${myLibrary.length}`;

    main.appendChild(divCard);

    let divCardTitle = document.createElement("div");
    divCardTitle.classList.add("card-title");
    divCardTitle.textContent = `Book Title: ${myLibrary[myLibrary.length-1].title}`;
    divCard.appendChild(divCardTitle);

    let divCardMainAuthor = document.createElement("div");
    divCardMainAuthor.classList.add("card-main");
    divCardMainAuthor.textContent = `Book Number: ${author.value}`;
    divCard.appendChild(divCardMainAuthor);

    let divCardMainPageNumber = document.createElement("div");
    divCardMainPageNumber.classList.add("card-main");
    divCardMainPageNumber.textContent = `Book Number: ${pageNumbers.value}`;
    divCard.appendChild(divCardMainPageNumber);

    let divCardFooter = document.createElement("div");
    divCardFooter.classList.add("card-footer");
    divCardFooter.textContent = `Book Number: ${radioValue()}`;
    divCard.appendChild(divCardFooter);

    let deleteBtn=document.createElement("button");
    deleteBtn.textContent="Delete"
    deleteBtn.classList.add(`${myLibrary.length}`);

    deleteBtn.addEventListener("click", (e)=>{
      let entry=(e.path[0]);
      let entryNumber=(entry.getAttribute("class"));
      let indexNumber=(entryNumber-1);
      myLibrary.splice(indexNumber, 1);
      divCard.classList.remove("card");
      divCardTitle.classList.remove("card-title");
      divCardMainAuthor.classList.remove("card-main");
      divCardMainPageNumber.classList.remove("card-main");
      divCardFooter.classList.add("card-footer");

    });
    divCard.appendChild(deleteBtn);
  }
}


//delete= myLibrary.length-1