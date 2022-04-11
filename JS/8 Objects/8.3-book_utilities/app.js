'use strict';

// Instructions
// 1. create 2 book objects with properties: name, author, year.
const book1 = {
  title: 'Adventures of Huckleberry Finn',
  author: 'Mark Twain',
  publishingYear: 1885,
  // lang: 'English',
};
const book2 = {
  title: 'Norwegian Wood',
  author: 'Haruki Murakami',
  publishingYear: 1985,
  // lang: 'Japanese',
};

// 2. create an empty object bookUtils (utils = short for utilities).
const bookUtils = {};

// 3. add to to the bookUtils object a function getFirstPublished, that recieves 2 books and returns the book with the smaller year.
bookUtils.getFirstPublished = (book1, book2) =>
  book1.publishingYear < book2.publishingYear ? book1 : book2;

console.log(bookUtils.getFirstPublished(book2, book1).title);

// 4. add to to the bookUtils object a function setNewEdition, that recieves abook and an edition year and sets a new property latestEdition with the edition year, or updates an existing one.
bookUtils.setNewEdition = (book, editionYear) =>
  (book.editionYear = editionYear);

// 5. add to to the bookUtils object a setLanguage function, that recieves a book and a language and sets a new property language with the languahe, or updates an existing one.
bookUtils.setLanguage = (book, language) => (book.language = language);

// 6. add to to the bookUtils object a setTranslation function, that recieves a book a language and a translator, and sets a new property of translation, which is an object that contains the translator and the language.
bookUtils.setTranslation = (book, language, translator) =>
  (book.translation = { translator, language });

bookUtils.setTranslation(book2, 'English', 'Jay Rubin');

console.log(book2.translations);

// 7. add to to the bookUtils object a setPublisher function, that recieves a book a name and a location, and sets a new property named publisher, which is an object that contains the name and location.
bookUtils.setPublisher = (book, name, location) =>
  (book.publisher = {
    name,
    location,
  });

bookUtils.setPublisher(book1, 'Chatto & Windus', 'Mississippi');

console.log(book1.publisher);

// 8. add to to the bookUtils object a function isSamePublisher, that recieves 2 books and checks if the publisher name and location are identical in the 2 books.
bookUtils.isSamePublisher = (book1, book2) => {
  return book1.publisher &&
    book2.publisher &&
    book1.publisher.name === book2.publisher.name &&
    book1.publisher.location === book2.publisher.location
    ? true
    : false;
};

console.log(bookUtils.isSamePublisher(book1, book1));
console.log(bookUtils.isSamePublisher(book1, book2));
