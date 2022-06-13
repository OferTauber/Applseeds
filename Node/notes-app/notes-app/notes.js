const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
  return 'Your notes...';
};

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('New note added!'));
  } else {
    console.log(chalk.red.inverse('Note title taken!'));
  }
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const removeNote = function (title) {
  const notes = loadNotes();
  const indexToRemove = notes.findIndex((note) => note.title === title);
  if (indexToRemove === -1) {
    console.log(chalk.red.inverse('Title was not found'));
  } else {
    notes.splice(indexToRemove, 1);
    saveNotes(notes);
    console.log(chalk.green.inverse('Note was removed'));
  }
};

const ListNontes = () => {
  const notes = loadNotes();
  if (notes.length === 0) {
    console.log('You dint have any notes');
    return;
  }

  console.log('Your notes:');
  notes.forEach((note) => {
    console.log(`Title: ${note.title}, Body: ${note.body}`);
  });
};

module.exports = { getNotes, addNote, removeNote, ListNontes };
