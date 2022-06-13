// Lets create crud operations to manage users in a json file.
// Create a CRUD application and store them in a users.json file
// that you are able to do the following operations:
// 1. Create a user
// 2. Read a user
// 3. Update a user
// 4. Delete a user
// Each user needs at least the following:
// 1. Id
// 2. Name
// 3. Email
// Use this npm package to create unique ids.
// When reading, updating or deleting a user, you must only use
// their id to find them.
// Ninja
// A user is able to create a password.
// A user is able to update their password.
const fs = require('fs');
const validator = require('validator');
const uniqid = require('uniqid');
const chalk = require('chalk');

const FILE = 'user.json';

const getUsers = () => {
  try {
    const dataBuffer = fs.readFileSync(FILE);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

const getUserById = (id) => {
  const usersArr = getUsers();
  const user = usersArr.find((userFromArr) => userFromArr.id === id);
  return user;
};

const saveUsers = (users) => {
  const dataJSON = JSON.stringify(users);
  fs.writeFileSync(FILE, dataJSON);
};

const createUser = (name, email) => {
  if (!validator.isEmail(email)) {
    console.log(chalk.red.inverse('Email is invalid'));
    return;
  }

  const existingUsers = getUsers();
  const emailIndex = existingUsers.findIndex(
    (user) => user.email === email.toLowerCase()
  );

  if (-1 !== emailIndex) {
    console.log(chalk.red.inverse('This email address is taken'));
    return;
  }

  const newUser = {
    name,
    email,
    id: uniqid(),
  };

  existingUsers.push(newUser);
  saveUsers(existingUsers);
  console.log(chalk.green.inverse('User is successfuly added'));
};

const readAllUsers = () => {
  const users = getUsers();
  console.log(chalk.inverse('All saved users:'));
  users.forEach((user) => {
    console.log(`Id: ${user.id}, Name: ${user.name}, email: ${user.email}`);
  });
};

const readUser = (id) => {
  const user = getUserById(id);
  if (!user) {
    console.log(chalk.red('User id is not found!'));
  } else {
    console.log(`Name: ${user.name}, email: ${user.email}`);
  }
};

const updateUser = (id, newName, newEmail) => {
  if (newEmail && !validator.isEmail(newEmail)) {
    console.log(chalk.red('New email is invalid!'));
    return;
  }

  const users = getUsers();
  const userIndex = users.findIndex((userFromArr) => userFromArr.id === id);
  if (userIndex === -1) {
    console.log(chalk.red('User Id was not found'));
    return;
  }

  const userToEdit = { ...users[userIndex] };
  users.splice(userIndex, 1);

  newName && (userToEdit.name = newName);
  newEmail && (userToEdit.email = newEmail);

  users.push(userToEdit);
  saveUsers(users);
  console.log(chalk.green('User was edited!'));
};

const deleteUser = (id) => {
  const users = getUsers();
  const userIndex = users.findIndex((userFromArr) => userFromArr.id === id);
  if (userIndex === -1) {
    console.log(chalk.red('User Id was not found'));
    return;
  }
  users.splice(userIndex, 1);
  saveUsers(users);
  console.log(chalk.green('User was deleted!'));
};

module.exports = { createUser, readAllUsers, readUser, updateUser, deleteUser };
