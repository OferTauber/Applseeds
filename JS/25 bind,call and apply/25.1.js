const wonderWoman = {
  name: 'Diana Prince',
};
const batman = {
  name: 'Bruce Wayne',
};
const superHeroes = [wonderWoman, batman];

function printName() {
  console.log(`my name is ${this.name}`);
}

function printHeroes(heroes, printFunc) {
  for (const heroe of heroes) {
    printFunc.call(heroe);
  }
}

printHeroes(superHeroes, printName);
