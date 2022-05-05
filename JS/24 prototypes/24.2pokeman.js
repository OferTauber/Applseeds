function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon = function () {
  console.log(`I choose you, ${this.name}!`);
};
Pokemon.prototype.attack = function (attackNum) {
  console.log(`${this.name} used ${this.attack[attackNum]}`);
};

module.exports = Pokemon;

const validPokemon = new Pokemon('Squirtle', 'Water', [
  'Ice Burn',
  'Anchor Shot',
  'Fury Swipes',
  'Acid Armor',
]);

console.log(console);
