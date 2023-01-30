class Book{

  constructor (title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}
};

const connections=(()=>{
  const addBookBtn = document.querySelector(".add-book-btn");
  const form = document.querySelector(".form"); /////
  const overlay = document.querySelector(".overlay"); /////
  const closeFormBtn = document.querySelector(".close-btn");
  const submitBtn = document.getElementById("submit-btn");
  const title = document.getElementById("title"); //title.value= title
  const author = document.getElementById("author");
  const pageNumbers = document.getElementById("page_numbers");
  const readStatus = document.getElementsByName("read_status"); //node list
  const readStatusArray = Array.from(readStatus); /////
  const main = document.getElementById("main"); /////
  const cards = document.querySelectorAll("card");

  return {form, overlay, readStatusArray, main, addBookBtn, closeFormBtn, pageNumbers};
})();

// FUNCTIONS
const func=(()=>{

  const openPopup=()=>{
    (connections.form).classList.add("active");
    (connections.overlay).classList.add("active");
  }

  const closePopup=()=>{
    (connections.form).classList.remove("active");
    (connections.overlay).classList.remove("active");
  }

  const radioValue=()=>{
    if ((connections.readStatusArray)[0].checked === true) {
      return (connections.readStatusArray)[0].value;
    } else {
      return (connections.readStatusArray)[1].value;
    }
  }

  const pushBookToLibrary=()=>{
    for (let i = 0; i < 1; i++) {
      let divCard = document.createElement("div");
      divCard.classList.add("card");
      if (radioValue() === "Read") {
        divCard.classList.add("read");
      } else {
        divCard.classList.add("not-read");
      }
      divCard.setAttribute("id", `card-${myLibrary.length}`);

      (connections.main).appendChild(divCard);

      let divCardTitle = document.createElement("div");
      divCardTitle.classList.add("card-title");
      divCardTitle.textContent = `${myLibrary[myLibrary.length - 1].title}`;
      divCard.appendChild(divCardTitle);

      let divCardMainAuthor = document.createElement("div");
      divCardMainAuthor.classList.add("card-main");
      divCardMainAuthor.textContent = `By: ${author.value}`;
      divCard.appendChild(divCardMainAuthor);

      let divCardMainPageNumber = document.createElement("div");
      divCardMainPageNumber.classList.add("card-main");
      divCardMainPageNumber.textContent = `Page Numbers: ${(connections.pageNumbers).value}`;
      divCard.appendChild(divCardMainPageNumber);

      let divCardFooter = document.createElement("div");
      divCardFooter.classList.add("card-footer");
      divCardFooter.textContent = `Read, or Not Read? : ${radioValue()}`;
      divCard.appendChild(divCardFooter);

      let changeReadStatus = document.createElement("button");
      changeReadStatus.textContent = "Change Read Status";
      divCard.appendChild(changeReadStatus);
      changeReadStatus.style.cssText = "width: 90%;";
      changeReadStatus.style.cssText = "border-radius: .5rem;";
      changeReadStatus.style.cssText = "padding: .5rem 1.5rem;";

      changeReadStatus.addEventListener("click", (e) => {
        if (e.path[1].getAttribute("class") === "card read") {
          e.path[1].setAttribute("class", "card not-read");
          divCardFooter.textContent = `Read, or Not Read? : Not Read`;
        } else if (e.path[1].getAttribute("class") === "card not-read") {
          e.path[1].setAttribute("class", "card read");
          divCardFooter.textContent = `Read, or Not Read? : Read`;
        }
      });

      let deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add(`${myLibrary.length}`);
      deleteBtn.style.cssText = "width: 90%;";
      deleteBtn.style.cssText = "border-radius: .5rem;";
      deleteBtn.style.cssText = "padding: .5rem 1.5rem;";

      deleteBtn.addEventListener("click", (e) => {
        let text =
          "Are you sure you want to delete? \n\nThis action cannot be undone.";
        if (confirm(text) === true) {
          let entry = e.path[0];
          let entryNumber = entry.getAttribute("class");
          let indexNumber = entryNumber - 1;
          myLibrary.splice(indexNumber, 1);
          divCard.remove();
        } else {
          return;
        }
      });
      divCard.appendChild(deleteBtn);
    }
  }
  return{openPopup, closePopup, pushBookToLibrary, radioValue};
})();

// EVENTS(WHAT TO DO)
const event= (()=>{
(connections.addBookBtn).addEventListener("click", () => {
  func.openPopup();
});

(connections.closeFormBtn).addEventListener("click", ()=>{
  func.closePopup();
});

(connections.overlay).addEventListener("click", ()=>{
  func.closePopup();  
});

(connections.form).addEventListener("submit", (e)=>{
  myLibrary = [];
  e.preventDefault();
  const newBook= new Book(title.value, author.value, (connections.pageNumbers).value, func.radioValue());
  myLibrary.push(newBook);
  func.closePopup();
  func.pushBookToLibrary();
});
return {};
})();
