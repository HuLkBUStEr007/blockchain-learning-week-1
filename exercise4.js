//By Taking inputs from users
var nTitle = prompt("Enter the title of the book: ");
var nAuthor = prompt("Enter the Name of Author: ");
const nPages = parseFloat(prompt("Enter the no of Pages: "));
const Book = {
    Title: nTitle,
    Author: nAuthor,
    NumberOfPages: nPages,
  };
  console.log(Book);

//Without taking input from user:
const nBook = {
    Title: "Mastering Ethereum",
    Author: "Andreas M. Antonopoulos &  Dr. Gavin Wood ",
    NumberOfPages: 424,
  };
  console.log(nBook);