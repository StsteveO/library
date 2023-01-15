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
let cards=document.querySelectorAll("card");

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
    if(radioValue()==="read"){
      divCard.classList.add("read");
    }else{
      divCard.classList.add("not-read");
    };
    divCard.setAttribute("id", `card-${myLibrary.length}`);
    // divCard.textContent=`Book Number: ${myLibrary.length}`;

    main.appendChild(divCard);

    let divCardTitle = document.createElement("div");
    divCardTitle.classList.add("card-title");
    divCardTitle.textContent = `${myLibrary[myLibrary.length-1].title}`;
    divCard.appendChild(divCardTitle);

    let divCardMainAuthor = document.createElement("div");
    divCardMainAuthor.classList.add("card-main");
    divCardMainAuthor.textContent = `By: ${author.value}`;
    divCard.appendChild(divCardMainAuthor);

    let divCardMainPageNumber = document.createElement("div");
    divCardMainPageNumber.classList.add("card-main");
    divCardMainPageNumber.textContent = `Page Numbers: ${pageNumbers.value}`;
    divCard.appendChild(divCardMainPageNumber);

    let divCardFooter = document.createElement("div");
    divCardFooter.classList.add("card-footer");
    divCardFooter.textContent = `Read, or Not Read? : ${radioValue()}`;
    divCard.appendChild(divCardFooter);

    let changeReadStatus = document.createElement("button");
    changeReadStatus.textContent = "Change Read Status";
    divCard.appendChild(changeReadStatus);
    changeReadStatus.style.cssText= "width: 90%;";

    //Format read change status btn

    let deleteBtn=document.createElement("button");
    deleteBtn.textContent="Delete"
    deleteBtn.classList.add(`${myLibrary.length}`);
    deleteBtn.style.cssText = "width: 90%;";

    deleteBtn.addEventListener("click", (e)=>{
      let text=("Are you sure you want to delete? \n\nThis action cannot be undone.");
      if(confirm(text)===true){
      let entry=(e.path[0]);
      let entryNumber=(entry.getAttribute("class"));
      let indexNumber=(entryNumber-1);
      myLibrary.splice(indexNumber, 1);
      divCard.remove();
      }else{
        return;
      }
    });
    divCard.appendChild(deleteBtn);
  }
}

console.log(cards);

