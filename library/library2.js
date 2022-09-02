class Book {
  constructor(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
  }
}

let library = [];

// Globals:
const addBookBtn = document.querySelector(".add-book");
let desk = document.querySelector(".desk");
let bookBeingEdited;
const readTally = document.querySelector(".read-tally");
const unreadTally = document.querySelector(".unread-tally");

const modalCloseBtns = document.querySelectorAll(".modal-close");
const modalContentBox = document.querySelector(".modal-content");
const modalActual = document.querySelector(".modal");
const modalAlertBox = document.querySelector(".modal-alert-box");
let modalInputTitle = document.querySelector("#title");
let modalInputAuthor = document.querySelector("#author");
let modalCheckBox = document.querySelector(".read");
const submitBookBtn = document.querySelector(".submit-book-button");

const modalEditBook = document.querySelector("#modal-edit-book");
let modalEditTitle = document.querySelector(".edit-title");
let modalEditAuthor = document.querySelector(".edit-author");
let modalEditCheckbox = document.querySelector(".edit-read");
const modalEditAlertBox = document.querySelector("#modal-edit-alert");
const submitEditedBookBtn = document.querySelector("#submit-edit-book-btn");

// Functions:
function displayAddModal(modal) {
  modal.style.display = "block";
  modalInputTitle.value = "";
  modalInputAuthor.value = "";
  modalCheckBox.checked = false;
}

function createBookObject(title, author, isRead) {
  book = new Book(title, author, isRead);
  return book;
}

function addBookToLibrary(book) {
  const isThereAnError = checkForError(book);

  if (isThereAnError.success) {
    library.push(book);
  }

  return isThereAnError;
}

function populateDeskCard(book) {
  bookCard = document.createElement("div");
  bookCard.classList.add("book-card");

  bookCardTitle = document.createElement("div");
  bookCardTitle.classList.add("book-card-title");
  bookCard.insertAdjacentElement("beforeend", bookCardTitle);

  bookCardAuthor = document.createElement("div");
  bookCardAuthor.classList.add("book-card-author");
  bookCard.insertAdjacentElement("beforeend", bookCardAuthor);

  bookCardButtons = document.createElement("div");
  bookCardButtons.classList.add(".book-card-buttons");
  bookCard.insertAdjacentElement("beforeend", bookCardButtons);

  readButton = document.createElement("button");
  readButton.innerText = "Mark Read";
  readButton.classList.add("read-button");
  editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.classList.add(".edit-button");
  removeCardButton = document.createElement("button");
  removeCardButton.innerText = "Remove";
  removeCardButton.classList.add("remove-card-button");

  bookCardButtons.insertAdjacentElement("beforeend", readButton);
  bookCardButtons.insertAdjacentElement("beforeend", editButton);
  bookCardButtons.insertAdjacentElement("beforeend", removeCardButton);

  if (book.isRead === true) {
    bookCard.style.borderColor = "green";
    readButton.innerText = "Mark Un-read";
  }

  desk.insertAdjacentElement("beforeend", bookCard);

  bookCardTitle.innerText = book.title;
  bookCardAuthor.innerText = book.author;

  removeCardButton.addEventListener("click", () => {
    removeBookFromLibrary(book);
  });

  editButton.addEventListener("click", () => {
    editBookInLibrary(book);
    displayAddModal(modalEditBook);
  });

  readButton.addEventListener("click", () => {
    book.isRead = !book.isRead;
    updateUI();
  });
}

function rebuildAllCards() {
  desk.textContent = "";
  library.forEach(populateDeskCard);

  console.log(library);
}

function removeBookFromLibrary(book) {
  // let currentBookIndex = library.findIndex(bookObject => book.title === bookObject.title && book.author === bookObject.author);

  const currentBookIndex = library.indexOf(book);

  library.splice(currentBookIndex, 1);
  updateUI();
}

function editBookInLibrary(oldBook) {
  modalEditTitle.value = oldBook.title;
  modalEditAuthor.value = oldBook.author;
  modalEditCheckbox.checked = oldBook.isRead;

  bookBeingEdited = oldBook;
}
function updateCounters() {
  const totalBooksRead = library.filter((b) => b.isRead).length;
  const totalBooks = library.length;
  const totalBooksUnread = totalBooks - totalBooksRead;

  unreadTally.innerText = `(${totalBooksUnread})`;
  readTally.innerText = `(${totalBooksRead})`;
}

function updateUI() {
  updateCounters();
  rebuildAllCards();
}

function checkForError(book, bookToIgnore) {
  const otherBook = (element) =>
    element.title === book.title && element.author === book.author;

  const alreadyExists = library.some(otherBook);
  const isInvalidInput = book.title.trim() == "" || book.author.trim() == "";

  if (isInvalidInput) {
    return { success: false, error: "Title and/or Author is invalid" };
  } else if (alreadyExists) {
    return { success: false, error: "This book already exists!" };
  }

  return { success: true };
}

function submitEditedBook(bookBeingEditedCopy, e) {
  if (checkForError(book).success === true) {
    bookBeingEdited = bookBeingEditedCopy;
    updateUI();
    modalEditAlertBox.style.display = "none";
    e.target.parentElement.parentElement.parentElement.style.display = "none";
  } else {
    modalEditAlertBox.style.display = "block";
    modalEditAlertBox.innerText = checkForError(book).error;
    return;
  }
}

// Event Listeners:
addBookBtn.addEventListener("click", () => {
  displayAddModal(modalActual);
});

submitBookBtn.addEventListener("click", () => {
  let bookAddedToLibrary = addBookToLibrary(
    createBookObject(
      modalInputTitle.value,
      modalInputAuthor.value,
      modalCheckBox.checked
    )
  );

  if (bookAddedToLibrary.success) {
    modalActual.style.display = "none";
    updateUI();
    modalAlertBox.style.display = "none";
  } else {
    modalAlertBox.style.display = "block";
    modalAlertBox.innerText = bookAddedToLibrary.error;
  }
});

submitEditedBookBtn.addEventListener("click", (e) => {
  let bookBeingEditedCopy = { ...bookBeingEdited };

  bookBeingEditedCopy.title = modalEditTitle.value;
  bookBeingEditedCopy.author = modalEditAuthor.value;
  bookBeingEditedCopy.isRead = modalEditCheckbox.checked;

  submitEditedBook(bookBeingEditedCopy, e);
});

modalCloseBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    modalAlertBox.style.display = "none";
    modalEditAlertBox.style.display = "none";
    e.target.parentElement.parentElement.style.display = "none";
  });
});
