'use strict';

// 1. Create an object that represents a book. It should have
// 4-5 properties that make sense for a book to have.
// 2. Then write a function that has one argument, a book,
// that will return the following description from your book
// object:
// `The book <book name> was written by <author name> in
// the year <publishing yeary

const book1 = {
  title: 'Adventures of Huckleberry Finn',
  author: 'Mark Twain',
  publishingYear: 1885,
  lang: 'English',
};
const book2 = {
  title: 'Norwegian Wood',
  author: 'Haruki Murakami',
  publishingYear: 2000,
  lang: 'Japanese',
};

const bookInfo = (book) =>
  console.log(
    `The book "${book.title}" was written by ${book.author} in the year ${book.publishingYear}`
  );

bookInfo(book1);
bookInfo(book2);
