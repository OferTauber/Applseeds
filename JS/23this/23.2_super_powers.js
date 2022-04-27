const storm = {
  superPower: 'controls the weather',
  printSuperPower,
};
function printSuperPower() {
  console.log('my superpower is ' + this.superPower);
}

storm.printSuperPower();
