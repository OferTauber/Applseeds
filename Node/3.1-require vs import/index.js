const greet = require('./greet.js');
const set_name = require('./set_name.js');
const text = require('./handel_text.js');

const fname = 'ofEr';
const lname = 'TaUbeR';

const name = set_name(text.firstOnly(fname), text.firstOnly(lname));
greet(name);
