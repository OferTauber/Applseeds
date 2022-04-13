'use strict';

// 1. Create 3 separate objects that their key is called name
// and their value is a string. Store them in separate
// variables.
const obj1 = { name: 'Ofer' };
const obj2 = { name: 'Maya' };
const obj3 = { name: 'Shakked' };

// 2. Create a new Map object that sets each object as a key
// and assign an id number as the value.
const mapNames = new Map();

mapNames.set(obj1, 1);
mapNames.set(obj2, 2);
mapNames.set(obj3, 3);

console.log(mapNames);

// 3. Iterate over the Map object with the for..of loop.
// - log the name and id
for (const [kye, value] of mapNames) {
  void value;
  console.log(kye.name, value);
}
