const yargs = require('yargs');
const users = require('./users');

yargs.version('1.1.0');

// 1. Create a user
yargs.command({
  command: 'create',
  describe: 'Create a user',
  builder: {
    name: {
      describe: 'User name',
      demandOption: true,
      type: 'string',
    },
    email: {
      describe: 'User email',
      demandOption: true,
      type: 'string',
    },
    // password: {
    //   describe: 'User password',
    //   demandOption: true,
    //   type: 'string',
    // },
  },
  handler: function (argv) {
    users.createUser(argv.name, argv.email);
  },
});

// 2.1 Read all users
yargs.command({
  command: 'read-all',
  describe: 'Read all users',
  handler: function () {
    users.readAllUsers();
  },
});
// 2.2 Read a user
yargs.command({
  command: 'read-user',
  describe: 'Read user by Id',
  builder: {
    id: {
      describe: 'User id',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    users.readUser(argv.id);
  },
});

// 3. Update a user
yargs.command({
  command: 'update',
  describe: 'Update user by id',
  builder: {
    id: {
      describe: "User's id",
      demandOption: true,
      type: 'string',
    },
    name: {
      describe: "User's updated name",
      demandOption: false,
      type: 'string',
    },
    email: {
      describe: "User's updated email",
      demandOption: false,
      type: 'string',
    },
  },
  handler(argv) {
    users.updateUser(argv.id, argv.name, argv.email);
  },
});

// 4. Delete a user
yargs.command({
  command: 'delete',
  describe: 'Delete user by Id',
  builder: {
    id: {
      describe: 'User id',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    users.deleteUser(argv.id);
  },
});

yargs.parse();
