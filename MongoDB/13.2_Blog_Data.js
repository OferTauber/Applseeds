const { lorem } = require('faker/lib/locales/cz');
const Lorem = require('faker/lib/lorem');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connetctionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'blog';

MongoClient.connect(
  connetctionURL,
  { useNewUrlParser: true },
  async (error, client) => {
    try {
      let tempRes = undefined;

      if (error) {
        return console.log('Unable to connect to server');
      }

      const db = client.db(databaseName);

      tempRes = await db.collection('users').insertMany(users);
      usersIds = tempRes.ops.map((post) => post._id);

      tempRes = await db.collection('posts').insertOne(posts.shift());
      await db
        .collection('users')
        .updateOne(
          { _id: ObjectId(usersIds[0]) },
          { $push: { posts: tempRes.ops._id } }
        );
    } catch (e) {
      console.warn(e);
    }
  }
);

const users = [
  {
    name: 'Ofer',
    posts: [],
  },
  {
    name: 'Maya',
    posts: [],
  },
  {
    name: 'Shakked',
    posts: [],
  },
];

const posts = [
  {
    date: new Date(),
    title: 'intresting Artical',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a fringilla neque. Integer condimentum ipsum urna, id tincidunt nunc dignissim.',
    comments: [],
  },
  {
    date: new Date(),
    title: 'Fun weekend',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a fringilla neque. Integer condimentum ipsum urna, id tincidunt nunc dignissim.',
    comments: [],
  },
  {
    date: new Date(),
    title: 'Cookies recepy',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a fringilla neque. Integer condimentum ipsum urna, id tincidunt nunc dignissim.',
    comments: [],
  },
];
const comments = [
  {
    postedBy: undefined,
    body: 'Grate post!',
    comments: [],
  },
  {
    postedBy: undefined,
    body: 'Lookes fun!',
    comments: [],
  },
  {
    postedBy: undefined,
    body: 'Delicious',
    comments: [],
  },
  {
    postedBy: undefined,
    body: 'Thenks',
    comments: [],
  },
];
